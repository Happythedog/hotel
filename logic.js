 /**
* guest Verefied Transaction.
* @param {hotel.cto.Verified} tx - the guest Verefied transaction
* @transaction
*/
async function Verified(tx){
    const factory = getFactory();
    const NS = 'hotel.cto';
  
    const guest =tx.guest ;
    guest.verified = 'ACCEPTED';
    // update the state of the guest
    const guestRegistry = await getAssetRegistry(NS + '.guest');
    await guestRegistry.update(guest);
  }
 /**
* guest REJECTED Transaction.
* @param {hotel.cto.Rejected} tx - the guest REJECTED transaction
* @transaction
*/
async function Rejected(tx){
    const factory = getFactory();
    const NS = 'hotel.cto';
  
    const guest =tx.guest ;
    guest.verified = 'REJECTED';
    // update the state of the guest
    const guestRegistry = await getAssetRegistry(NS + '.guest');
    await guestRegistry.update(guest);
  }
    