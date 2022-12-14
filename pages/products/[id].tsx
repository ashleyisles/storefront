import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import Example from '../../components/navbar';
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from '@heroicons/react/20/solid';
import { RadioGroup, Tab } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function ProductDetailPage() {
  const router = useRouter();
  const product = {
    name: 'Custom Tote Bag',
    href: '#',
    price: '$35',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageSrc:
      'https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      'Model wearing light green backpack with black canvas straps and front zipper pouch.',
    breadcrumbs: [
      { id: 1, name: 'Travel', href: '#' },
      { id: 2, name: 'Bags', href: '#' },
    ],
    colors: [
      {
        name: 'Natural',
        bgColor: 'bg-yellow-700',
        selectedColor: 'ring-gray-900',
      },
      {
        name: 'Black',
        bgColor: 'bg-black',
        selectedColor: 'ring-gray-400',
      },
    ],
  };

  const reviews = {
    average: 4,
    totalCount: 3,
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
        date: 'July 16, 2021',
        datetime: '2021-07-16',
        author: 'Emily Selman',
        avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      {
        id: 2,
        rating: 5,
        content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        author: 'Hector Gibbons',
        avatarSrc:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      // More reviews...
    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="flex justify-center">
      <Head>
        <title>storefront. - Product Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <Example />

        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            {/* Product image */}
            <div className="mt-10 lg:col-start-1 lg:row-span-2 lg:mt-0">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product details */}
            <div className="lg:max-w-lg">
              <nav aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-2">
                  {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                    <li key={breadcrumb.id}>
                      <div className="flex items-center text-sm">
                        <a
                          href={breadcrumb.href}
                          className="font-medium text-gray-500 hover:text-gray-900"
                        >
                          {breadcrumb.name}
                        </a>
                        {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                          <svg
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            aria-hidden="true"
                            className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                          >
                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                          </svg>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {product.name}
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    {product.price}
                  </p>

                  <div className="ml-4 border-l border-gray-300 pl-4">
                    <h2 className="sr-only">Reviews</h2>
                    <div className="flex items-center">
                      <div>
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                reviews.average > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {reviews.average} out of 5 stars
                        </p>
                      </div>
                      <p className="ml-2 text-sm text-gray-500">
                        {reviews.totalCount} reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">
                    {product.description}
                  </p>
                </div>
              </section>
            </div>

            {/* Additional Information */}
            {/* <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
              <Tab.Group as="div">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex space-x-8">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      Specifications
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      Customer Reviews
                    </Tab>
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  <Tab.Panel className="-mb-10">
                    <h3 className="sr-only">Customer Reviews</h3>

                    {reviews.featured.map((review, reviewIdx) => (
                      <div
                        key={review.id}
                        className="flex space-x-4 text-sm text-gray-500"
                      >
                        <div className="flex-none py-10">
                          <img
                            src={review.avatarSrc}
                            alt=""
                            className="h-10 w-10 rounded-full bg-gray-100"
                          />
                        </div>
                        <div
                          className={classNames(
                            reviewIdx === 0 ? '' : 'border-t border-gray-200',
                            'py-10'
                          )}
                        >
                          <h3 className="font-medium text-gray-900">
                            {review.author}
                          </h3>
                          <p>
                            <time dateTime={review.datetime}>
                              {review.date}
                            </time>
                          </p>

                          <div className="mt-4 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  review.rating > rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {review.rating} out of 5 stars
                          </p>

                          <div
                            className="prose prose-sm mt-4 max-w-none text-gray-500"
                            dangerouslySetInnerHTML={{ __html: review.content }}
                          />
                        </div>
                      </div>
                    ))}
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div> */}

            {/* Product form */}
            <div className="lg:col-start-2 lg:row-start-2 lg:max-w-lg">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>
                <div className="my-10">
                  <h2 className="text-sm font-medium text-gray-900">Color</h2>
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {' '}
                            {color.name}{' '}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              'h-8 w-8 border border-black border-opacity-10 rounded-full'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black"
                    >
                      Personalization
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="personalization"
                        id="personalization"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:opacity-50"
                        placeholder="Happy Holidays!"
                      />
                    </div>
                    <p
                      className="mt-2 text-xs text-gray-500"
                      id="email-description"
                    >
                      Text will show on the front of the bag.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-16 flex w-full items-center justify-center rounded-md border border-transparent bg-black py-3 px-8 text-base font-medium text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add to Cart
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
