"use client";
import Image from "next/image";


const rdvOptions = [
  {
    title: "Rendez-vous cabinet",
    description: "Consultation de 60 min pour 180€",
    image: "/icones/rdv.png",
    link: "https://consultation.avocat.fr/consultation-cabinet/forms.php?source=profile&targetid=39468",
    ariaLabel: "Prendre rendez-vous pour une consultation de 60 min pour 180€"
  },
  {
    title: "Consultation vidéo",
    description: "Consultation de 30 min pour 75€",
    image: "/icones/facetime.png",
    link: "https://consultation.avocat.fr/consultation-video/forms.php?source=profile&targetid=39468",
    ariaLabel: "Prendre rendez-vous pour une consultation vidéo de 30 min pour 75€"
  },
  {
    title: "Consultation téléphonique",
    description: "Consultation de 10 min pour 45€",
    image: "/icones/appel.png",
    link: "https://consultation.avocat.fr/consultation-telephonique/forms.php?source=profile&targetid=39468",
    ariaLabel: "Prendre rendez-vous pour une consultation téléphonique de 10 min pour 45€"
  },
  {
    title: "Question simple",
    description: "Réponse pour 45€",
    image: "/icones/question.png",
    link: "https://consultation.avocat.fr/question-simple/forms.php?source=profile&targetid=39468",
    ariaLabel: "Posez votre question pour 45€"
  },
  {
    title: "Consultation écrite",
    description: "Réponse pour 300€",
    image: "/icones/consultation-ecrite.png",
    link: "https://consultation.avocat.fr/consultation-juridique/forms.php?source=profile&targetid=39468",
    ariaLabel: "Posez votre question pour une consultation écrite à 300€"
  }
];

export default function RdvCards() {
  return (
    <section className="mt-12">
       {/* Ligne de séparation subtile */}
       <div className="border-t border-gray-300 mt-11 mb-11"></div>
      <h2 className="text-3xl font-semibold text-primary text-center">Prendre Rendez-vous</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {rdvOptions.map((rdv, index) => (
          <div 
            key={index} 
            className="bg-light shadow-lg p-6 rounded-lg hover:shadow-xl transition h-full flex flex-col justify-between"
          >
            <div className="flex justify-center">
              <Image src={rdv.image} alt={rdv.title} width={60} height={60} />
            </div>
            <h3 className="text-xl font-semibold text-primary mt-4">{rdv.title}</h3>
            <p className="mt-2 text-gray-700">{rdv.description}</p>
            <a
              href={rdv.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-secondary text-white px-4 py-2 rounded-lg text-sm transition 
                         hover:bg-red-700 hover:scale-105 hover:-translate-y-1"
              aria-label={rdv.ariaLabel}
            >
              Prendre rendez-vous
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}