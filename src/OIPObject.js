/** A Generic Class to offer shared functions between different OIP Objects */
class OIPObject {
	constructor(){
		this.txid = undefined
	}

	/**
	 * Set the TXID of the OIPObject
	 * @param {string} txid - The TXID that identifies the OIPObject
	 * @example
	 * artifact.setTXID("1cb19b83dd20614d05ea64fffb111d588cf513ee65aa488953944fc7fe95e2c4")
	 */
	setTXID(txid){
		this.txid = txid;
	}
	/** 
	 * Get the TXID of the OIPObject
	 * @return {string} Returns the TXID of the OIPObject, or `undefined` if the txid has not been set
	 * @example
	 * var txid = artifact.getTXID()
	 */
	getTXID(){
		return this.txid;
	}
}

module.exports = OIPObject