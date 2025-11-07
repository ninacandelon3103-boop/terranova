import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { TicketType, ContestType } from '../types';

export function Reservation() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    ticket_type: 'vendredi' as TicketType,
  });

  const [contests, setContests] = useState({
    skateFree: false,
    music: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContestChange = (contest: 'skateFree' | 'music') => {
    setContests(prev => ({
      ...prev,
      [contest]: !prev[contest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Create reservation
      const { error: reservationError } = await supabase
        .from('reservations')
        .insert([
          {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            phone: formData.phone,
            ticket_type: formData.ticket_type,
          },
        ]);

      if (reservationError) throw reservationError;

      // Register for contests
      if (contests.skateFree || contests.music) {
        const contestData = [];
        if (contests.skateFree) {
          contestData.push({
            email: formData.email,
            contest_type: 'skate-freestyle',
          });
        }
        if (contests.music) {
          contestData.push({
            email: formData.email,
            contest_type: 'musique',
          });
        }

        const { error: contestError } = await supabase
          .from('contest_registrations')
          .insert(contestData);

        if (contestError) throw contestError;
      }

      setSuccess(true);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        ticket_type: 'vendredi',
      });
      setContests({
        skateFree: false,
        music: false,
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la réservation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffd6f] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-[#000080] mb-2 text-center">Réserve ta place</h1>
          <p className="text-center text-[#f04A00] font-bold mb-8">Gratuit - Places limitées</p>

          {success && (
            <div className="bg-green-100 border-4 border-green-500 text-green-800 p-4 rounded-lg mb-6">
              Réservation confirmée ! Un email de confirmation a été envoyé.
            </div>
          )}

          {error && (
            <div className="bg-red-100 border-4 border-red-500 text-red-800 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white border-4 border-[#000080] p-8 rounded-lg">
            <div className="space-y-6">
              {/* Nom et Prénom */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#000080] font-bold mb-2">Prénom</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-[#000080] p-3 rounded text-[#000080]"
                  />
                </div>
                <div>
                  <label className="block text-[#000080] font-bold mb-2">Nom</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-[#000080] p-3 rounded text-[#000080]"
                  />
                </div>
              </div>

              {/* Email et Téléphone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#000080] font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-[#000080] p-3 rounded text-[#000080]"
                  />
                </div>
                <div>
                  <label className="block text-[#000080] font-bold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-[#000080] p-3 rounded text-[#000080]"
                  />
                </div>
              </div>

              {/* Ticket Type */}
              <div>
                <label className="block text-[#000080] font-bold mb-2">Billet</label>
                <select
                  name="ticket_type"
                  value={formData.ticket_type}
                  onChange={handleInputChange}
                  className="w-full border-2 border-[#000080] p-3 rounded text-[#000080]"
                >
                  <option value="vendredi">Vendredi 10 juillet</option>
                  <option value="samedi">Samedi 11 juillet</option>
                  <option value="dimanche">Dimanche 12 juillet</option>
                  <option value="lundi">Lundi 13 juillet</option>
                  <option value="4-jours">Pass 4 jours</option>
                </select>
              </div>

              {/* Contests */}
              <div className="border-t-2 border-[#000080] pt-6">
                <h3 className="text-lg font-bold text-[#000080] mb-4">Participer aux concours (optionnel)</h3>

                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={contests.skateFree}
                      onChange={() => handleContestChange('skateFree')}
                      className="w-6 h-6 mr-3 accent-[#f04A00]"
                    />
                    <span className="text-[#000080]">Concours de Freestyle en Skate</span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={contests.music}
                      onChange={() => handleContestChange('music')}
                      className="w-6 h-6 mr-3 accent-[#f04A00]"
                    />
                    <span className="text-[#000080]">Concours de Musique</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#000080] text-[#fffd6f] font-bold py-3 rounded-lg text-lg mt-8 hover:bg-[#f04A00] hover:text-[#000080] transition disabled:opacity-50"
            >
              {loading ? 'Réservation en cours...' : 'Réserver'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
