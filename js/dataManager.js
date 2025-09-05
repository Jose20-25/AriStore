/**
 * ARISTORE - GESTOR CENTRALIZADO DE DATOS
 * Este archivo maneja toda la lógica de datos para garantizar consistencia
 * entre inventario, ventas, clientes y dashboards
 */

// ============= CONSTANTES DEL SISTEMA =============
const ARISTORE_DATA = {
    KEYS: {
        products: 'aristore_products',
        clients: 'aristore_clientes', 
        sales: 'aristore_sales_v2',
        counters: 'aristore_product_counters',
        nextId: 'aristore_counter_v2'
    },
    VERSION: '2.0.0',
    LAST_UPDATE: 'aristore_last_update'
};

// ============= GESTOR CENTRALIZADO DE DATOS =============
class AriStoreDataManager {
    constructor() {
        this.initializeSystem();
    }

    // Inicializar sistema y verificar integridad
    initializeSystem() {
        console.log('🚀 AriStore Data Manager - Inicializando...');
        
        // Verificar y limpiar datos existentes
        this.cleanDuplicateData();
        this.verifyDataIntegrity();
        
        console.log('✅ Sistema inicializado correctamente');
    }

    // ============= GESTIÓN DE PRODUCTOS =============
    
    getProducts() {
        const products = this.loadFromStorage(ARISTORE_DATA.KEYS.products, []);
        console.log(`📦 Productos cargados: ${products.length}`);
        return products;
    }

    saveProducts(products) {
        // Limpiar duplicados antes de guardar
        const cleanProducts = this.removeDuplicatesById(products);
        
        this.saveToStorage(ARISTORE_DATA.KEYS.products, cleanProducts);
        this.updateLastModified();
        
        console.log(`💾 Productos guardados: ${cleanProducts.length} (${products.length - cleanProducts.length} duplicados eliminados)`);
        
        // Notificar a otros sistemas del cambio
        this.notifyDataChange('products', cleanProducts);
        
        return cleanProducts;
    }

    addProduct(product) {
        const products = this.getProducts();
        
        // Asignar ID único si no existe
        if (!product.id) {
            product.id = this.getNextId();
        }
        
        // Verificar que no existe producto con ese ID
        const existingIndex = products.findIndex(p => p.id === product.id);
        if (existingIndex !== -1) {
            // Actualizar producto existente
            products[existingIndex] = { ...products[existingIndex], ...product };
            console.log(`✏️ Producto actualizado: ${product.name} (ID: ${product.id})`);
        } else {
            // Agregar nuevo producto
            products.push(product);
            console.log(`➕ Producto agregado: ${product.name} (ID: ${product.id})`);
        }
        
        return this.saveProducts(products);
    }

    deleteProduct(productId) {
        const products = this.getProducts();
        const filteredProducts = products.filter(p => p.id !== productId);
        
        if (filteredProducts.length !== products.length) {
            console.log(`🗑️ Producto eliminado: ID ${productId}`);
            return this.saveProducts(filteredProducts);
        } else {
            console.log(`⚠️ Producto no encontrado para eliminar: ID ${productId}`);
            return products;
        }
    }

    updateProductStock(productId, newStock) {
        const products = this.getProducts();
        const productIndex = products.findIndex(p => p.id === productId);
        
        if (productIndex !== -1) {
            products[productIndex].stock = newStock;
            console.log(`📊 Stock actualizado: Producto ${productId} -> ${newStock} unidades`);
            return this.saveProducts(products);
        } else {
            console.error(`❌ No se pudo actualizar stock: Producto ${productId} no encontrado`);
            return products;
        }
    }

    // ============= GESTIÓN DE CLIENTES =============
    
    getClients() {
        const clients = this.loadFromStorage(ARISTORE_DATA.KEYS.clients, []);
        console.log(`👥 Clientes cargados: ${clients.length}`);
        return clients;
    }

    saveClients(clients) {
        const cleanClients = this.removeDuplicatesById(clients);
        this.saveToStorage(ARISTORE_DATA.KEYS.clients, cleanClients);
        this.updateLastModified();
        
        console.log(`💾 Clientes guardados: ${cleanClients.length}`);
        this.notifyDataChange('clients', cleanClients);
        
        return cleanClients;
    }

    // ============= GESTIÓN DE VENTAS =============
    
    getSales() {
        const sales = this.loadFromStorage(ARISTORE_DATA.KEYS.sales, []);
        console.log(`💰 Ventas cargadas: ${sales.length}`);
        return sales;
    }

    saveSales(sales) {
        const cleanSales = this.removeDuplicatesById(sales);
        this.saveToStorage(ARISTORE_DATA.KEYS.sales, cleanSales);
        this.updateLastModified();
        
        console.log(`💾 Ventas guardadas: ${cleanSales.length}`);
        this.notifyDataChange('sales', cleanSales);
        
        return cleanSales;
    }

    addSale(sale) {
        const sales = this.getSales();
        
        // Asignar ID único si no existe
        if (!sale.id) {
            sale.id = this.getNextId();
        }
        
        // Agregar timestamp si no existe
        if (!sale.timestamp) {
            sale.timestamp = new Date().toISOString();
        }
        
        sales.push(sale);
        console.log(`🛒 Venta registrada: ${sale.id} - $${sale.total}`);
        
        // Actualizar stock de productos vendidos
        this.updateStockAfterSale(sale);
        
        return this.saveSales(sales);
    }

    // ============= FUNCIONES AUXILIARES =============
    
    loadFromStorage(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error(`❌ Error cargando ${key}:`, error);
            return defaultValue;
        }
    }

    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error(`❌ Error guardando ${key}:`, error);
            return false;
        }
    }

    removeDuplicatesById(array) {
        if (!Array.isArray(array)) return [];
        
        return array.filter((item, index, self) => 
            index === self.findIndex(i => i.id === item.id)
        );
    }

    getNextId() {
        const currentId = this.loadFromStorage(ARISTORE_DATA.KEYS.nextId, 1000);
        const nextId = currentId + 1;
        this.saveToStorage(ARISTORE_DATA.KEYS.nextId, nextId);
        return currentId;
    }

    updateLastModified() {
        this.saveToStorage(ARISTORE_DATA.LAST_UPDATE, new Date().toISOString());
    }

    // ============= LIMPIEZA Y MANTENIMIENTO =============
    
    cleanDuplicateData() {
        console.log('🧹 Iniciando limpieza de datos duplicados...');
        
        // Limpiar productos
        const products = this.getProducts();
        const cleanProducts = this.removeDuplicatesById(products);
        if (cleanProducts.length !== products.length) {
            this.saveProducts(cleanProducts);
            console.log(`🧹 Productos: ${products.length} → ${cleanProducts.length} (${products.length - cleanProducts.length} duplicados eliminados)`);
        }
        
        // Limpiar clientes  
        const clients = this.getClients();
        const cleanClients = this.removeDuplicatesById(clients);
        if (cleanClients.length !== clients.length) {
            this.saveClients(cleanClients);
            console.log(`🧹 Clientes: ${clients.length} → ${cleanClients.length} (${clients.length - cleanClients.length} duplicados eliminados)`);
        }
        
        // Limpiar ventas
        const sales = this.getSales();
        const cleanSales = this.removeDuplicatesById(sales);
        if (cleanSales.length !== sales.length) {
            this.saveSales(cleanSales);
            console.log(`🧹 Ventas: ${sales.length} → ${cleanSales.length} (${sales.length - cleanSales.length} duplicados eliminados)`);
        }
        
        console.log('✅ Limpieza completada');
    }

    verifyDataIntegrity() {
        const products = this.getProducts();
        const clients = this.getClients();
        const sales = this.getSales();
        
        console.log('🔍 Verificación de integridad:');
        console.log(`  📦 Productos: ${products.length} registros`);
        console.log(`  👥 Clientes: ${clients.length} registros`);
        console.log(`  💰 Ventas: ${sales.length} registros`);
        
        // Verificar IDs únicos
        const productIds = products.map(p => p.id);
        const uniqueProductIds = [...new Set(productIds)];
        if (productIds.length !== uniqueProductIds.length) {
            console.warn('⚠️ Se detectaron IDs duplicados en productos');
        }
        
        return {
            products: products.length,
            clients: clients.length,
            sales: sales.length,
            integrity: productIds.length === uniqueProductIds.length
        };
    }

    // Actualizar stock después de una venta
    updateStockAfterSale(sale) {
        if (!sale.items || !Array.isArray(sale.items)) return;
        
        sale.items.forEach(item => {
            if (item.productId && item.quantity) {
                const products = this.getProducts();
                const productIndex = products.findIndex(p => p.id === item.productId);
                
                if (productIndex !== -1) {
                    products[productIndex].stock = Math.max(0, products[productIndex].stock - item.quantity);
                    console.log(`📉 Stock actualizado: ${products[productIndex].name} -> ${products[productIndex].stock} unidades`);
                }
                
                this.saveProducts(products);
            }
        });
    }

    // Notificar cambios a otros sistemas
    notifyDataChange(type, data) {
        // Disparar evento personalizado para notificar cambios
        const event = new CustomEvent('aistoreDataChange', {
            detail: { type, data, timestamp: new Date().toISOString() }
        });
        window.dispatchEvent(event);
    }

    // ============= FUNCIONES DE DEBUG Y MANTENIMIENTO =============
    
    getSystemStatus() {
        const status = {
            version: ARISTORE_DATA.VERSION,
            lastUpdate: this.loadFromStorage(ARISTORE_DATA.LAST_UPDATE),
            dataIntegrity: this.verifyDataIntegrity(),
            storageUsage: this.getStorageUsage()
        };
        
        console.table(status.dataIntegrity);
        return status;
    }

    getStorageUsage() {
        const keys = Object.values(ARISTORE_DATA.KEYS);
        const usage = {};
        
        keys.forEach(key => {
            const data = localStorage.getItem(key);
            usage[key] = data ? (data.length / 1024).toFixed(2) + ' KB' : '0 KB';
        });
        
        return usage;
    }

    resetAllData() {
        if (confirm('⚠️ ADVERTENCIA: Esto eliminará TODOS los datos del sistema.\n\n¿Estás completamente seguro?')) {
            Object.values(ARISTORE_DATA.KEYS).forEach(key => {
                localStorage.removeItem(key);
            });
            localStorage.removeItem(ARISTORE_DATA.LAST_UPDATE);
            
            console.log('🗑️ Todos los datos han sido eliminados');
            return true;
        }
        return false;
    }

    exportAllData() {
        const allData = {
            version: ARISTORE_DATA.VERSION,
            timestamp: new Date().toISOString(),
            products: this.getProducts(),
            clients: this.getClients(),
            sales: this.getSales()
        };
        
        return allData;
    }

    importAllData(data) {
        if (!data || typeof data !== 'object') {
            console.error('❌ Datos de importación inválidos');
            return false;
        }
        
        try {
            if (data.products) this.saveProducts(data.products);
            if (data.clients) this.saveClients(data.clients);
            if (data.sales) this.saveSales(data.sales);
            
            console.log('✅ Datos importados exitosamente');
            return true;
        } catch (error) {
            console.error('❌ Error importando datos:', error);
            return false;
        }
    }
}

// ============= INICIALIZACIÓN GLOBAL =============

// Crear instancia global del gestor de datos
window.AriStoreData = new AriStoreDataManager();

// Funciones globales de conveniencia
window.aristore = {
    // Productos
    getProducts: () => window.AriStoreData.getProducts(),
    saveProducts: (products) => window.AriStoreData.saveProducts(products),
    addProduct: (product) => window.AriStoreData.addProduct(product),
    deleteProduct: (id) => window.AriStoreData.deleteProduct(id),
    
    // Clientes
    getClients: () => window.AriStoreData.getClients(),
    saveClients: (clients) => window.AriStoreData.saveClients(clients),
    
    // Ventas
    getSales: () => window.AriStoreData.getSales(),
    saveSales: (sales) => window.AriStoreData.saveSales(sales),
    addSale: (sale) => window.AriStoreData.addSale(sale),
    
    // Utilidades
    getStatus: () => window.AriStoreData.getSystemStatus(),
    cleanData: () => window.AriStoreData.cleanDuplicateData(),
    resetAll: () => window.AriStoreData.resetAllData(),
    export: () => window.AriStoreData.exportAllData(),
    import: (data) => window.AriStoreData.importAllData(data)
};

console.log('🎯 AriStore Data Manager cargado');
console.log('💡 Usa window.aristore para acceso rápido a las funciones');
console.log('🔧 Ejecuta aristore.getStatus() para ver el estado del sistema');
