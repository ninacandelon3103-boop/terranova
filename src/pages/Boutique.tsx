import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { ShopProduct } from '../types';
import { Package } from 'lucide-react';

export function Boutique() {
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('shop_products')
          .select('*');

        if (fetchError) throw fetchError;
        setProducts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement des produits');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="min-h-screen bg-[#fffd6f] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-[#000080] mb-2 text-center">Boutique</h1>
          <p className="text-center text-[#f04A00] font-bold mb-8">Articles exclusifs Terra Nova</p>

          <div className="bg-white border-4 border-[#000080] rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-[#f04A00]">
                <Package size={24} />
              </div>
              <div>
                <p className="font-bold text-[#000080] text-lg mb-2">Point de vente sur place</p>
                <p className="text-[#000080]">
                  La boutique sera présente <strong>pendant le festival</strong> (10-13 juillet). Viens découvrir nos articles exclusifs !
                </p>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border-4 border-red-500 text-red-800 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center text-[#000080] text-xl">Chargement des produits...</div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border-4 border-[#f04A00] rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    {/* Product Image Placeholder */}
                    <div className="w-full h-48 bg-gray-200 border-b-4 border-[#f04A00] flex items-center justify-center">
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <Package size={48} className="mx-auto text-gray-400 mb-2" />
                          <p className="text-gray-500 text-sm">Image à venir</p>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#000080] mb-2">{product.name}</h3>
                      <p className="text-[#000080] mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-[#f04A00]">{product.price}€</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-[#000080] text-[#fffd6f] p-6 rounded-lg text-center">
                <p className="text-lg mb-2">Prix des articles en boutique</p>
                <p className="text-4xl font-bold">{totalPrice}€</p>
                <p className="text-sm mt-4 opacity-90">Prix pour l'ensemble de la sélection</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
