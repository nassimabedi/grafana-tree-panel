/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Info contains versioning information. how we\'ll want to distribute that information.
 */
export class VersionInfo {
  'buildDate': string;
  'compiler': string;
  'gitCommit': string;
  'gitTreeState': string;
  'gitVersion': string;
  'goVersion': string;
  'major': string;
  'minor': string;
  'platform': string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'buildDate',
      baseName: 'buildDate',
      type: 'string',
    },
    {
      name: 'compiler',
      baseName: 'compiler',
      type: 'string',
    },
    {
      name: 'gitCommit',
      baseName: 'gitCommit',
      type: 'string',
    },
    {
      name: 'gitTreeState',
      baseName: 'gitTreeState',
      type: 'string',
    },
    {
      name: 'gitVersion',
      baseName: 'gitVersion',
      type: 'string',
    },
    {
      name: 'goVersion',
      baseName: 'goVersion',
      type: 'string',
    },
    {
      name: 'major',
      baseName: 'major',
      type: 'string',
    },
    {
      name: 'minor',
      baseName: 'minor',
      type: 'string',
    },
    {
      name: 'platform',
      baseName: 'platform',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return VersionInfo.attributeTypeMap;
  }
}