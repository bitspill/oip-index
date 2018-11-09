import OIPElastic from '../src/OIPElastic'
let index = new OIPElastic()

describe('OIPIndex API', () => {
	describe('OIPIndex API Functions', () => {
		it('GET ResearchTomogramArtifact by txid | getArtifactByTXID()', async () => {
			let txid = 'cc9a11050acdc4401aec3f40c4cce123d99c0f2c27d4403ae4a2536ee38a4716'
			let response = await index.getArtifactByTXID(txid)
			expect(response.success).toBeTruthy()
			expect(response.artifact.getInternalArtifactType() === 'ResearchTomogram')
		});
		})
	})
})
