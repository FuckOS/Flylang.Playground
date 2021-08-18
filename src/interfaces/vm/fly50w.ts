import axios from 'axios';
import html2text from '../../utils/html2text';

interface IFlylangInput {
  version: 1;
  source: string;
}

const BASEURL = "https://play-f5w-01.flyos.top/api/play/";

export async function evalCode(code: string): Promise<string>  {
  const req: IFlylangInput = {
    version: 1,
    source: code
  };

  const resp = await axios.post<string>(BASEURL, req, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  try {
    let resl = String(resp.data);
    return resl;
  } catch(e) {
    console.log(e)
    return "Error!\n\n" + html2text(resp.data);
  }
}