import { Entity } from "../core/domain/Entity";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";

interface IStreamProps {
  rtspStream: any;   
}

export class Stream extends Entity<IStreamProps>{
    private constructor (props: IStreamProps, id?: UniqueEntityID) {
        super(props, id);
    }
    
    get id (): UniqueEntityID {
      return this._id;
    }

    public static create (props: IStreamProps, id?: UniqueEntityID) : Result<Stream> {
      const guardResult = Guard.againstNullOrUndefinedBulk([
        { argument: props.rtspStream.name, argumentName: 'name' },
        { argument: props.rtspStream.streamUrl, argumentName: 'url' },
        { argument: props.rtspStream.wsPort, argumentName: 'port' },
        { argument: props.rtspStream.options.ffmpegOptions["-s"], argumentName: 'resolution' },
        { argument: props.rtspStream.options.ffmpegOptions["-f"], argumentName: 'format' },
        { argument: props.rtspStream.options.ffmpegOptions["-rtsp_transport"], argumentName: 'transport' }
      ]);
  
      if (guardResult.succeeded) {
        return Result.ok<Stream>(new Stream(props, id))
      } else {
        return Result.fail<Stream>(guardResult.message);
      }
  }
}