export interface Author { 
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  ipAddress: string
}

export const authors = [ 
  { 
    id: 1,
    firstName: 'phung',
    lastName: 'tan',
    email: 'eptich123@gmail.com',
    ipAddress: '123.1.2'
  }, 
  { 
    id: 2,
    firstName: 'brack',
    lastName: 'obama',
    email: 'obama@gmail.com',
    ipAddress: '123.1.2'
  },
      { 
    id: 3,
    firstName: 'hilary',
    lastName: 'clinton',
    email: 'clinton@gmail.com',
    ipAddress: '123.1.2'
  }, 
    {  
    id: 4,
    firstName: 'hary',
    lastName: 'poster',
    email: 'poster@gmail.com',
    ipAddress: '123.1.2'
  }, 
  {
  id: 5,
  firstName: 'hary',
  lastName: 'kean',
  email: 'kean@gmail.com',
  ipAddress: '123.1.2'
  }
]