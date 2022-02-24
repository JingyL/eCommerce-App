import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [
        {
            name: 'Sulwhasoo Concentrate',
            category: 'Treatment',
            image: '/images/Sulwhasoo-concen.jpg',
            price: 120,
            countInStock:500,
            brand: 'Sulwhasoo',
            rating: 4.5,
            numReviews: 10,
            description: 'skin product'
        },
        {
            name: 'Sulwhasoo Cream',
            category: 'Cream',
            image: '/images/Sulwhasoo-cream.jpg',
            price: 150,
            countInStock:500,
            brand: 'Sulwhasoo',
            rating: 4.7,
            numReviews: 100,
            description: 'Skin product'
        },
        {
            name: 'Sulwhasoo Mask',
            category: 'Mask',
            image: '/images/Sulwhasoo-mask.jpg',
            price: 75,
            countInStock:500,
            brand: 'Sulwhasoo',
            rating: 4.5,
            numReviews: 10,
            description: 'Skin product'
        },
        {
            name: 'Laneige Base',
            category: 'MakeUp',
            image: '/images/Laneige-base.jpg',
            price: 35,
            countInStock:500,
            brand: 'Laneige',
            rating: 4.5,
            numReviews: 130,
            description: 'MakeUp product'
        },
        {
            name: 'Laneige Corrector',
            category: 'MakeUp',
            image: '/images/Laneige-corrector.jpg',
            price: 35,
            countInStock:500,
            brand: 'Laneige',
            rating: 4.5,
            numReviews: 10,
            description: 'MakeUp product'
        },
        {
            name: 'Laneige Set',
            category: 'Gift Set',
            image: '/images/Laneige-set.jpg',
            price: 120,
            countInStock:500,
            brand: 'Laneige',
            rating: 4.5,
            numReviews: 50,
            description: 'skin product'
        },
        {
            name: 'Dr.Jart Balm',
            category: 'Gift Set',
            image: '/images/DjBB.jpg',
            price: 120,
            countInStock:500,
            brand: 'Dr.Jart',
            rating: 4.5,
            numReviews: 50,
            description: 'makeup product'
        },
        {
            name: 'Dr.Jart V7',
            category: 'Gift Set',
            image: '/images/DjV7.jpg',
            price: 120,
            countInStock:500,
            brand: 'Dr.Jart',
            rating: 4.5,
            numReviews: 50,
            description: 'skin product'
        },
        {
            name: 'Dr.Jart Mask',
            category: 'Gift Set',
            image: '/images/DjMask.jpg',
            price: 120,
            countInStock:500,
            brand: 'Dr.Jart',
            rating: 4.5,
            numReviews: 50,
            description: 'skin product'
        }
    ]
}

export default data;