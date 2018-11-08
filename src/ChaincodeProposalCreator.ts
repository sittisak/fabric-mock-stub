// import { SerializedIdentity } from 'fabric-shim';
import ByteBuffer from 'bytebuffer';
/**
 * @hidden
 */
// export class ChaincodeProposalCreator implements SerializedIdentity {
export class ChaincodeProposalCreator {
    // tslint:disable-next-line:variable-name
    id_bytes: ByteBuffer;

    [fieldName: string]: any;
    mspid: string;

    constructor(private mspId: string, private signingId: string) {
        this.id_bytes = new ByteBuffer().writeIString(signingId).flip();
    }

    getMspid(): string {
        return this.mspId;
    }

    getIdBytes(): ByteBuffer {
        return this.id_bytes;
    }
}