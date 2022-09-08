export class Ports {
    private static instance: Ports;
    private ports : number[] = [
        42001,
        42002,
        42003,
        42004,
        42005,
    ];
    private userPorts : number[] = [];

    private constructor() { }

    public static getInstance(): Ports {
        if (!Ports.instance) {
            Ports.instance = new Ports();
        }

        return Ports.instance;
    }

    public getPort() : number {
        if (this.ports.length > 0) {
            const port : number = this.ports[0];
            this.ports.splice(0, 1);
            this.userPorts.push(port);
            return port;
        } else {
            throw new Error("Could not establish a port");
        }
    }

    public closePort(port : number) : void {
        const index : number = this.userPorts.indexOf(port, 0);
        if (index > -1) {
            this.userPorts.splice(index, 1);
            this.ports.push(port);
        } 
    }
}