import { AbstractController } from "../core/infra/AbstractController";
import { Ports } from "../core/infra/Ports";
import { Stream } from "../domain/Stream";
import { StreamDTO } from "../dto/StreamDTO";
import StreamMap from "../mapper/StreamMapper";

export class StreamController extends AbstractController {
  streamList : Stream[] = [];

  async executeImpl(): Promise<any> {}

  async startStream (req : any, res : any) {
    super.execute(req, res);
    var dto = this.req.body as StreamDTO;
    
    if (this.req.body.url == "") {
      this.clientError("url is not valid");
    }
    var stream : Stream | undefined;
    this.streamList.forEach((element) => {
      if(element.props.rtspStream.options.streamUrl === this.req.body.url) {
        stream = element;
      }
    });
    if (stream === undefined) {
      dto.port = this.findStreamPort();
      stream = await StreamMap.toDomain(dto);
      if (stream === undefined) {
        this.clientError();
      } else {
        this.streamList.push(stream);
      }
    }
    this.ok<StreamDTO>(StreamMap.toDTO(stream!));
  }

  async stopStream(req : any, res : any) {
    super.execute(req, res);
    let id = this.req.params.id;
    const stream :  Stream | undefined = this.streamList.find((element) => element.id.toString() === id);
    if(stream !== undefined)  {
      stream.props.rtspStream.stop();
      this.stopStreamPort(stream.props.rtspStream.wsPort);
      this.streamList = this.streamList.filter(item => item !== stream);
    }
    this.ok();
  }

  findStreamPort() : number {
    return Ports.getInstance().getPort();
  }

  stopStreamPort(port : number) {
    Ports.getInstance().closePort(port);
  }
}

const streamController = new StreamController();

export {
  streamController
}