'use client'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect';
import { link } from 'fs';

function UpcomingWebinars() {
  
  const projects = [
    {
      title: 'Stripe',
      description:
        'A technology company that builds economic infrastructure for the internet.',
      slug: 'understanding-tech-skills',
      isFeatured: true,
    },
    {
      title: 'Netflix',
      description:
        'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
        slug: 'understanding-tech-skills',
        isFeatured: false,
      },
    {
      title: 'Google',
      description:
        'A multinational technology company that specializes in Internet-related services and products.',
      slug: 'understanding-tech-skills',
      isFeatured: true,
    },
    {
      title: 'Meta',
      description:
        'A technology company that focuses on building products that advance Facebooks mission of bringing the world closer together.',
      slug: 'understanding-tech-skills',
      isFeatured: true,
    },
    {
      title: 'Amazon',
      description:
        'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
      slug: 'understanding-tech-skills',
      isFeatured: false,
    },
    {
      title: 'Microsoft',
      description:
        'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
      slug: 'understanding-tech-skills',
      isFeatured: true,
    },
  ]

  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
          FEATURED WEBINARS
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
          Enhance Your Technical Skills
          </p>
        </div>
        <div className='mt-10'>
        <HoverEffect 
        items={projects.map(project =>(
          {
            title: project.title,
            description: project.description, 
            slug: project.slug,
            link: '/About'   
          }
        ))} />        
        </div>
        <div className='mt-10 text-center'>
          <Link href={'/About'}
          className='px-4 py-2 rounded border-neutral-700 bg-white text-black hover:bg-gray-100 transition duration-200'>
          View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
