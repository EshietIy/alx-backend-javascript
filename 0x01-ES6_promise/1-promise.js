export default function getFullResponseFromAPI(success) {
  return new Promise((resolved, failed) => {
    if (success) {
      resolved({ status: 200, body: 'Success' });
    } else {
      failed(new Error('The fake API is not working currently'));
    }
  });
}
