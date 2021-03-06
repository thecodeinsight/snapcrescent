import 'package:snap_crescent/models/base_model.dart';
import 'package:snap_crescent/models/location.dart';

class VideoMetadata extends BaseUiBean {
  String? name;
  String? size;
  String? fileTypeName;
  String? fileTypeLongName;
  String? mimeType;
  String? fileExtension;
  String? model;
  String? height;
  String? width;
  int? orientation;
  String? fstop;
  Location? location;
  int? locationId;
  String? base64EncodedPhoto;

  VideoMetadata(
      {bean,
      this.name,
      this.size,
      this.fileTypeName,
      this.fileTypeLongName,
      this.mimeType,
      this.fileExtension,
      this.model,
      this.height,
      this.width,
      this.orientation,
      this.fstop,
      this.location,
      this.locationId,
      this.base64EncodedPhoto})
      : super(
            id: bean.id,
            version: bean.version,
            creationDatetime: bean.creationDatetime,
            lastModifiedDatetime: bean.lastModifiedDatetime,
            active: bean.active);

  factory VideoMetadata.fromJson(Map<String, dynamic> json) {
    return VideoMetadata(
        bean: BaseUiBean.fromJson(json),
        name: json['name'],
        size: json['size'],
        fileTypeName: json['fileTypeName'],
        fileTypeLongName: json['fileTypeLongName'],
        mimeType: json['mimeType'],
        fileExtension: json['fileExtension'],
        model: json['model'],
        height: json['height'],
        width: json['width'],
        orientation: json['orientation'],
        fstop: json['fstop'],
        location: json['location'] == null
            ? null
            : Location.fromJson(json['location']),
        locationId: json['locationId'],
        base64EncodedPhoto: json['base64EncodedPhoto']);
  }

  factory VideoMetadata.fromMap(Map<String, dynamic> map) {
    return VideoMetadata(bean: BaseUiBean.fromMap(map), name: map['NAME']);
  }

  Map<String, dynamic> toMap() {
    Map<String, dynamic> map = super.toMap();

    map['NAME'] = name;

    return map;
  }
}
