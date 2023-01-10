import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedResearch() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h3 font-red-hat-display mb-4">Backed by 10 years of research.</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Notched Music Therapy has been clinically proven to work on hundreds of patients. Feel free to read the scientific literature yourself. </p>
        </div>
        <div className="pb-12 md:pb-16">

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos-id-featposts>

            {/* 1st article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="100">
              <figure>
                <img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src={require('../images/related-post-03.jpg').default} width="258" height="154" alt="Related post 03" />
                <div className="absolute inset-0 bg-teal-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="flex-grow">
                  <a className="hover:underline" href="https://www.tinnitusjournal.com/articles/the-windowed-sound-therapy-a-new-empirical-approach-for-an-effective-personalized-treatment-of-tinnitus.pdf">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                        20% stopped hearing tinnitus entirely
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">International Tinnitus Journal, Vol. 15, No. 1, 51–61</div>
                </footer>
              </div>
            </article>

            {/* 2nd article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="200">
              <figure>
                <img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src={require('../images/related-post-04.jpg').default} width="258" height="154" alt="Related post 04" />
                <div className="absolute inset-0 bg-purple-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="flex-grow">
                  <a className="hover:underline" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2918775/pdf/cib0303_0274.pdf">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      Patients experienced 26.1% reduction in tinnitus volume
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">Communicative and Integrative Biology 3:3, 274-277</div>
                </footer>
              </div>
            </article>

            {/* 3rd article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="300">
              <figure>
                <img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src={require('../images/related-post-05.jpg').default} width="258" height="154" alt="Related post 05" />
                <div className="absolute inset-0 bg-indigo-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="flex-grow">
                  <a className="hover:underline" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0024685">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      Some patients experinced tinnitus reductions after one month
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">PLOS ONE 6(9): e24685</div>
                </footer>
              </div>
            </article>

            {/* 4th article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="400">
              <figure>
                <img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src={require('../images/related-post-06.jpg').default} width="258" height="154" alt="Related post 06" />
                <div className="absolute inset-0 bg-pink-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="flex-grow">
                  <a className="hover:underline" href="https://www.pnas.org/doi/full/10.1073/pnas.0911268107">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      Reduced overactivity in the brain's auditory cortex
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">Proceedings of the National Academy of Sciences USA, Vol. 107, No. 3</div>
                </footer>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedResearch;
