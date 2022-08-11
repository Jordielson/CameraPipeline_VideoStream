import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Mapper } from "../core/infra/Mapper";
import { Stream } from "../domain/Stream";
import { StreamDTO } from "../dto/StreamDTO";
const NodeStream = require('node-rtsp-stream');

class StreamMap extends Mapper<Stream> {
    public static async toDomain (raw: StreamDTO): Promise<Stream | undefined> {
      const nodeStream = await new NodeStream({
        name: "Camera Pipeline",
        streamUrl: raw.url,
        wsPort: raw.port,
        ffmpegOptions: { // options ffmpeg flags
          "-f": raw.video_format ?? "mpegts", // output file format.
          "-codec:v": "mpeg1video", // video codec
          "-b:v": "1000k", // video bit rate
          "-stats": "",
          "-r": 25, // frame rate
          "-s": raw.resolution ?? "640x480", // video size
          "-bf": 0,
          // transport
          "-rtsp_transport": raw.transport_protocol ?? "tcp -i",
          // audio
          "-codec:a": "mp2", // audio codec
          "-ar": 44100, // sampling rate (in Hz)(in Hz)
          "-ac": 1, // number of audio channels
          "-b:a": "128k", // audio bit rate
        },
      });
      
      const StreamOrError = Stream.create({
        rtspStream: nodeStream,
      },
        new UniqueEntityID(raw.id));
      return StreamOrError.isSuccess ? StreamOrError.getValue() : undefined;
    }
  
    public static toDTO (stream: Stream): StreamDTO {
      return {
        id: stream.id.toString(),
        name: stream.props.rtspStream.options.name,
        url: stream.props.rtspStream.options.streamUrl,
        port: stream.props.rtspStream.options.wsPort,
        resolution: stream.props.rtspStream.options.ffmpegOptions["-s"],
        video_format: stream.props.rtspStream.options.ffmpegOptions["-f"],
        transport_protocol: stream.props.rtspStream.options.ffmpegOptions["-rtsp_transport"],
      }
  }
}

export default StreamMap;