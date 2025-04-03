import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";


export const metadata: Metadata = {
  title: "Licenciement | Cabinet Mérieux",
  description: "Le Cabinet Mérieux vous accompagne dans les procédures de licenciement : inaptitude physique, reclassement, droit du travail.",
  keywords: [
    "licenciement",
    "avocat licenciement",
    "droit social",
    "licenciement économique",
    "licenciement pour faute",
    "reclassement",
    "droit du travail"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Licenciement | Cabinet Mérieux",
    description: "Comprendre les règles du licenciement et les obligations légales des employeurs.",
    url: "https://cabinet-merieux.fr/droit-social/licenciement",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciement | Cabinet Mérieux",
    description: "Comprendre les règles du licenciement et les obligations légales des employeurs.",
  },
};
export default function LicenciementPage() {
  return (
    <>
     

      {/* Image de la page */}
      <PageHeader
        title="Licenciement"
        subtitle="Faites-vous accompagner par l&rsquo;expertise du Cabinet Mérieux"
        imageSrc="/header/licenciement.jpg"
      />

      <main className="container mx-auto p-6">
        {/* Introduction */}
        <section className="mt-6 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-3xl font-semibold text-primary text-center">Comprendre le licenciement</h2>
          <p className="mt-4 text-gray-700 text-center">
            Le licenciement est une procédure délicate encadrée par le <strong>Code du Travail</strong>. Un employeur doit respecter un formalisme précis pour éviter toute contestation devant le <strong>Conseil de Prud&rsquo;hommes</strong>. 
            Le Cabinet Mérieux accompagne <strong>employeurs et salariés</strong> pour garantir une procédure conforme à la réglementation en vigueur.
          </p>
        </section>

        {/* Types de licenciement */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Les différents motifs de licenciement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Carte 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Licenciement économique</h3>
              <p className="mt-2">
                Un licenciement lié à des <strong>difficultés économiques</strong>, une <strong>réorganisation</strong>, ou la <strong>suppression d’un poste</strong>. L&rsquo;employeur doit proposer un <strong>plan de reclassement</strong>.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Licenciement pour faute</h3>
              <p className="mt-2">
                Peut être <strong>simple, grave ou lourde</strong>. Un licenciement pour faute nécessite une <strong>procédure stricte</strong> et un entretien préalable.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Licenciement pour inaptitude</h3>
              <p className="mt-2">
                Sur <strong>avis du médecin du travail</strong>, l&rsquo;employeur doit rechercher un <strong>solution de reclassement</strong> avant toute rupture de contrat.
              </p>
            </div>

            {/* Carte 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Licenciement pour insuffisance professionnelle</h3>
              <p className="mt-2">
                Lorsqu&rsquo;un salarié ne répond pas aux <strong>attentes de son poste</strong> sans faute avérée. L&rsquo;employeur doit prouver une <strong>incapacité avérée</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Licenciement pour inaptitude */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Licenciement pour inaptitude</h2>
          <p className="mt-4">
            Un salarié peut être déclaré <strong>inapte</strong> par la médecine du travail lorsqu&rsquo;il ne peut plus occuper son poste. Ce diagnostic doit être établi après :
          </p>
          <ul className="mt-4 list-none list-inside text-center">
            <li>📌 Un <strong>examen médical</strong> par le médecin du travail.</li>
            <li>📌 Une <strong>analyse des conditions de travail</strong> du salarié.</li>
            <li>📌 Une <strong>visite de pré-reprise</strong> (si applicable).</li>
          </ul>
          <p className="mt-4">
            <strong>Reclassement obligatoire :</strong> Avant tout licenciement, l&rsquo;employeur doit <strong>proposer un poste adapté</strong>. S&rsquo;il ne le fait pas ou si aucune solution n&rsquo;existe, il peut alors procéder à un <strong>licenciement pour inaptitude</strong>.
          </p>
        </section>

        {/* Obligations de l'employeur */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Obligations légales de l&rsquo;employeur</h2>
          <p className="mt-4">
            Lors d&rsquo;un licenciement, l&rsquo;employeur doit impérativement respecter <strong>plusieurs étapes</strong> pour garantir la conformité de la procédure :
          </p>
          <ul className="mt-4 list-none list-inside text-center">
            <li>📌 <strong>Convocation</strong> à un entretien préalable par lettre recommandée.</li>
            <li>📌 <strong>Entretien avec le salarié</strong> pour exposer les raisons du licenciement.</li>
            <li>📌 <strong>Délai de réflexion</strong> après l’entretien avant la prise de décision.</li>
            <li>📌 <strong>Notification officielle</strong> du licenciement avec un motif précis.</li>
            <li>📌 <strong>Versement des indemnités</strong> légales (si applicables).</li>
          </ul>
          <p className="mt-4">
            Le non-respect de ces règles peut entraîner <strong>la nullité du licenciement</strong> et des sanctions pour l&rsquo;employeur.
          </p>
        </section>

      </main>
    </>
  );
}