// import { SerializedIdentity } from 'fabric-shim';
// import ByteBuffer from 'bytebuffer';
/**
 * @hidden
 */
// export class ChaincodeProposalCreator implements SerializedIdentity {
export class ChaincodeProposalCreator {
    // tslint:disable-next-line:variable-name
    id_bytes: any;

    [fieldName: string]: any;
    mspid: string;

    constructor(private mspId: string, private signingId: string) {
        // getIdBytes() actually do not return Buffer
        this.id_bytes = {
            toBuffer: () => Buffer.from(signingId)
        }
    }

    getMspid(): string {
        return this.mspId;
    }

    getIdBytes(): any {
        return this.id_bytes;
    }
}