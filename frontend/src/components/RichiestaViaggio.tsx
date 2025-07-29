'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    // Simula l'invio dei dati al backend
    console.log("La tua richiesta di viaggio: ", data);
    setIsSubmitted(true);
    // Qui potresti reindirizzare l'utente o mostrare un messaggio di conferma più elaborato
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#6da4be] to-[#204558] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Titolo e Sottotitolo Accattivanti */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 drop-shadow-lg leading-tight">
          Sogna il tuo Prossimo Viaggio, Noi lo Realizziamo
        </h2>
        <p className="text-xl sm:text-2xl text-center mb-12 opacity-90 max-w-2xl mx-auto">
          Nessun impegno, solo ispirazione! Raccontaci i tuoi desideri e daremo vita all'avventura perfetta per te.
        </p>

        {!isSubmitted ? (
          /* Form di Contatto Rielaborato */
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f3f3ed] p-8 md:p-10 rounded-3xl shadow-2xl space-y-7 border border-white border-opacity-30 backdrop-blur-sm">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {/* Campo Destinazione */}
              <div className="space-y-2">
                <label htmlFor="destination" className="font-semibold text-lg text-[#204558]">
                  La tua meta da sogno
                </label>
                <input
                  type="text"
                  id="destination"
                  placeholder="Es. Maldive, Kyoto, Dolomiti..."
                  className={`w-full p-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-[#6da4be] focus:border-[#6da4be] ${errors.destination ? 'border-red-500' : 'border-gray-300'} text-[#204558] placeholder-gray-400`}
                  {...register('destination', { required: 'Indica la tua destinazione ideale, è importante per noi!' })}
                />
                {errors.destination && <span className="text-red-500 text-sm font-medium">{errors.destination.message}</span>}
              </div>

              {/* Campo Date Preferite */}
              <div className="space-y-2">
                <label htmlFor="dates" className="font-semibold text-lg text-[#204558]">
                  Quando vorresti partire?
                </label>
                <input
                  type="text"
                  id="dates"
                  placeholder="Es. Estate 2025, tra Luglio e Agosto..."
                  className={`w-full p-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-[#6da4be] focus:border-[#6da4be] ${errors.dates ? 'border-red-500' : 'border-gray-300'} text-[#204558] placeholder-gray-400`}
                  {...register('dates', { required: 'Ci aiuti a capire la disponibilità con delle date indicative.' })}
                />
                {errors.dates && <span className="text-red-500 text-sm font-medium">{errors.dates.message}</span>}
              </div>
            </div>

            {/* Campo Tipo di Vacanza */}
            <div className="space-y-2">
              <label htmlFor="vacationType" className="font-semibold text-lg text-[#204558]">
                Che tipo di avventura cerchi?
              </label>
              <select
                id="vacationType"
                className="w-full p-3 rounded-xl border-2 border-gray-300 transition-all duration-300 focus:ring-4 focus:ring-[#6da4be] focus:border-[#6da4be] text-[#204558]"
                {...register('vacationType', { required: 'Scegli il tuo stile di viaggio!' })}
              >
                <option value="">Scegli l'esperienza perfetta...</option>
                <option value="relax_beach">Relax in spiaggia</option>
                <option value="mountain_trekking">Montagna e trekking</option>
                <option value="city_exploration">Esplorazione urbana</option>
                <option value="adventure_thrill">Adrenalina e avventura</option>
                <option value="culture_history">Cultura e storia</option>
                <option value="family_fun">Divertimento in famiglia</option>
              </select>
              {errors.vacationType && <span className="text-red-500 text-sm font-medium">{errors.vacationType.message}</span>}
            </div>

            {/* Campo Numero di Persone */}
            <div className="space-y-2">
              <label htmlFor="peopleCount" className="font-semibold text-lg text-[#204558]">
                Quanti sognatori siete?
              </label>
              <input
                type="number"
                id="peopleCount"
                placeholder="Es. 2 adulti, 1 bambino..."
                min="1"
                className={`w-full p-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-[#6da4be] focus:border-[#6da4be] ${errors.peopleCount ? 'border-red-500' : 'border-gray-300'} text-[#204558] placeholder-gray-400`}
                {...register('peopleCount', {
                  required: 'Quanti compagni di viaggio?',
                  min: { value: 1, message: 'Deve esserci almeno 1 persona.' }
                })}
              />
              {errors.peopleCount && <span className="text-red-500 text-sm font-medium">{errors.peopleCount.message}</span>}
            </div>

                        {/* Campo Note Aggiuntive */}
            <div className="space-y-2 group">
              <label htmlFor="additionalInfo" className="flex items-center font-semibold text-lg text-gray-700 group-focus-within:text-blue-600 transition-colors">
                <span className="mr-2 text-xl"></span> Hai altri desideri o dettagli da condividere?
              </label>
              <textarea
                id="additionalInfo"
                rows="4"
                placeholder="Qualsiasi cosa tu voglia aggiungere, come preferenze di alloggio, attività speciali o budget indicativo (facoltativo)."
                className="w-full p-3 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300 text-gray-800 placeholder-gray-400 resize-y"
                {...register('additionalInfo')}
              ></textarea>
            </div>

            {/* Bottone di Invio */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-[#204558] text-white text-xl font-bold rounded-xl hover:bg-[#163544] transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#6da4be] focus:ring-opacity-70"
              >
                Invia i tuoi Desideri di Viaggio
              </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                Nessun impegno • Nessuna pressione • Solo idee e sogni condivisi
              </p>
            </div>
          </form>
        ) : (
          /* Messaggio di Conferma Accattivante */
          <div className="bg-[#f3f3ed] p-8 md:p-10 rounded-3xl shadow-2xl text-center flex flex-col items-center justify-center min-h-[300px]">
            <svg className="w-20 h-20 text-[#204558] mb-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-3xl font-bold text-[#204558] mb-4">
              Grazie! Il tuo Sogno è in Viaggio!
            </h3>
            <p className="text-lg text-gray-700 max-w-prose mb-6">
              Abbiamo ricevuto la tua richiesta e siamo entusiasti di iniziare a cucire su misura la tua prossima avventura.
              Ti contatteremo a breve con una proposta personalizzata, creata pensando solo a te.
            </p>
            <p className="text-md text-gray-600">
              Nel frattempo, continua a sognare: al resto pensiamo noi!
            </p>
            {/* Se volessi mostrare i dati inviati per debug o conferma all'utente: */}
            {/* <div className="mt-8 p-6 bg-white rounded-xl shadow-inner text-left max-w-sm w-full">
              <h4 className="text-lg font-semibold mb-2 text-[#204558]">Riepilogo della tua richiesta:</h4>
              <pre className="text-sm text-gray-700 leading-relaxed">{JSON.stringify(formData, null, 2)}</pre>
            </div> */}
          </div>
        )}
      </div>
      {/* Elementi decorativi per un look più accattivante */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white opacity-5 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white opacity-5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-white opacity-5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default ContactForm;