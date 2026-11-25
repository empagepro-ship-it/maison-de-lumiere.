// Edit this object to personalize the invitation before sharing it.
// Set apiBase to a deployed API that implements POST /rsvps, POST /wishes,
// and GET /wishes?status=approved to share replies and moderated wishes online.
window.INVITATION = {
  houseName: 'Maison de Lumiere',
  hosts: ['Sariga Abhilash', 'Ishaan'],
  eventName: 'HOUSE WARMING',
  date: '2026-12-25',
  time: '10:00 AM', // Sample time: replace with the confirmed auspicious time.
  venue: 'Maison de Lumiere',
  address: 'Chelora, Kannur, Kerala 670594 · 11.8940551, 75.4372680',
  mapUrl: 'https://www.google.com/maps?q=11.8940551%2C75.4372680',
  hashtag: '#MaisonDeLumiere',
  dressCode: 'Festive traditional or elegant smart casual',
  hostEmail: '',
  apiBase: '' // Change this if your deployed API uses another base path.
};
