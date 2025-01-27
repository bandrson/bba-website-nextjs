import Link from 'next/link';
import Image from 'next/image';
import BottomNavigation from '../navigation/BottomNavigation';

// For copyright notice
const firstYear = 2023;
const curYear = new Date().getFullYear();

/**
 * Footer component
 * @param {Object} data - The footer links data. See ./src/data/footer-links.json
 */
export default function Footer({ data }) {
  return (
    <footer className="bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-row items-center py-6 md:flex-row md:py-12">
          <BottomNavigation data={data} />
          <div className="ml-auto hidden shrink-0 self-center sm:inline">
            <Image
              src="/images/bba-logomark-white.svg"
              alt="Bits and Bytes Association logo"
              width={70}
              height={70}
              priority
            />
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800 bg-neutral-900 px-6">
        <div className="flex justify-between py-3 sm:justify-center">
          <div className="flex cursor-default flex-col gap-x-1 text-sm text-gray-400 sm:flex-row">
            <p>
              Design by{' '}
              <Link href="#" className="duration-300 hover:text-light-font">
                @
                <span className="underline underline-offset-2">
                  placeholder
                </span>
              </Link>
              .
            </p>
            <p>
              Made with ❤️ by our{' '}
              <Link
                href="#"
                className="underline underline-offset-2 duration-300 hover:text-light-font"
              >
                volunteers
              </Link>
              .
            </p>
            <p>
              © {curYear > firstYear ? firstYear + '-' + curYear : firstYear}{' '}
              Bits and Bytes Association.
            </p>
          </div>
          <Image
            className="sm:hidden"
            src="/images/bba-logomark-white.svg"
            alt="Bits and Bytes Association logo"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
    </footer>
  );
}
