type MimeItem = {
  ext: string;
  name: string;
};

const mimes: Array<MimeItem> = [
  { "ext": "aac", "name": "audio/aac" },
  { "ext": "abw", "name": "application/x-abiword" },
  { "ext": "arc", "name": "application/octet-stream" },
  { "ext": "avi", "name": "video/x-msvideo" },
  { "ext": "azw", "name": "application/vnd.amazon.ebook" },
  { "ext": "bin", "name": "application/octet-stream" },
  { "ext": "bmp", "name": "image/bmp" },
  { "ext": "bz", "name": "application/x-bzip" },
  { "ext": "bz2", "name": "application/x-bzip2" },
  { "ext": "csh", "name": "application/x-csh" },
  { "ext": "css", "name": "text/css" },
  { "ext": "csv", "name": "text/csv" },
  { "ext": "doc", "name": "application/msword" },
  {
    "ext": "docx",
    "name":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  { "ext": "eot", "name": "application/vnd.ms-fontobject" },
  { "ext": "epub", "name": "application/epub+zip" },
  { "ext": "gif", "name": "image/gif" },
  { "ext": "htm", "name": "text/html" },
  { "ext": "html", "name": "text/html" },
  { "ext": "ico", "name": "image/x-icon" },
  { "ext": "ics", "name": "text/calendar" },
  { "ext": "jar", "name": "application/java-archive" },
  { "ext": "jpeg", "name": "image/jpeg" },
  { "ext": "jpg", "name": "image/jpeg" },
  { "ext": "js", "name": "application/javascript" },
  { "ext": "json", "name": "application/json" },
  { "ext": "mid", "name": "audio/midi" },
  { "ext": "midi", "name": "audio/midi" },
  { "ext": "mpeg", "name": "video/mpeg" },
  { "ext": "mpkg", "name": "application/vnd.apple.installer+xml" },
  { "ext": "odp", "name": "application/vnd.oasis.opendocument.presentation" },
  { "ext": "ods", "name": "application/vnd.oasis.opendocument.spreadsheet" },
  { "ext": "odt", "name": "application/vnd.oasis.opendocument.text" },
  { "ext": "oga", "name": "audio/ogg" },
  { "ext": "ogv", "name": "video/ogg" },
  { "ext": "ogx", "name": "application/ogg" },
  { "ext": "otf", "name": "font/otf" },
  { "ext": "png", "name": "image/png" },
  { "ext": "pdf", "name": "application/pdf" },
  { "ext": "ppt", "name": "application/vnd.ms-powerpoint" },
  {
    "ext": "pptx",
    "name":
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  },
  { "ext": "rar", "name": "application/x-rar-compressed" },
  { "ext": "rtf", "name": "application/rtf" },
  { "ext": "sh", "name": "application/x-sh" },
  { "ext": "svg", "name": "image/svg+xml" },
  { "ext": "swf", "name": "application/x-shockwave-flash" },
  { "ext": "tar", "name": "application/x-tar" },
  { "ext": "tif", "name": "image/tiff" },
  { "ext": "tiff", "name": "image/tiff" },
  { "ext": "ts", "name": "application/typescript" },
  { "ext": "ttf", "name": "font/ttf" },
  { "ext": "txt", "name": "text/plain" },
  { "ext": "vsd", "name": "application/vnd.visio" },
  { "ext": "wav", "name": "audio/x-wav" },
  { "ext": "weba", "name": "audio/webm" },
  { "ext": "webm", "name": "video/webm" },
  { "ext": "webp", "name": "image/webp" },
  { "ext": "woff", "name": "font/woff" },
  { "ext": "woff2", "name": "font/woff2" },
  { "ext": "xhtml", "name": "application/xhtml+xml" },
  { "ext": "xls", "name": "application/vnd.ms-excel" },
  {
    "ext": "xlsx",
    "name": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  { "ext": "xml", "name": "application/xml" },
  { "ext": "xul", "name": "application/vnd.mozilla.xul+xml" },
  { "ext": "zip", "name": "application/zip" },
  { "ext": "3gp", "name": "video/3gpp" },
  { "ext": "3g2", "name": "video/3gpp2" },
  { "ext": "7z", "name": "application/x-7z-compressed" },
];

class Mime {
  private exts = new Map<string, string>();
  private names = new Map<string, string>();

  constructor() {
    for (let i = 0; i < mimes.length; i++) {
      this.exts.set(mimes[i].ext, mimes[i].name);
      this.names.set(mimes[i].name, mimes[i].ext);
    }
  }

  public getByExtension(id: string): string {
    return this.exts.get(id) || "text/plain";
  }

  public getByName(id: string): string {
    return this.names.get(id) || "txt";
  }
}

export const MIME = new Mime();
