
var jsonQuery = require('json-query');
var data = 
{
    "_declaration": {
      "_attributes": {
        "version": "1.0",
        "encoding": "utf-8"
      }
    },
    "feed": {
      "_attributes": {
        "xmlns": "http://www.w3.org/2005/Atom",
        "xmlns:m": "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
        "xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
        "xml:base": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/"
      },
      "id": {
        "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products"
      },
      "title": {
        "_attributes": {
          "type": "text"
        },
        "_text": "Products"
      },
      "updated": {
        "_text": "2019-08-10T12:40:02.036Z"
      },
      "author": {
        "name": {}
      },
      "link": [
        {
          "_attributes": {
            "href": "Products",
            "rel": "self",
            "title": "Products"
          }
        },
        {
          "_attributes": {
            "href": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com/odata2webservices/InboundProduct/Products?$filter=catalogVersion/integrationKey%20eq%20%27Staged%7CB2B-FKTProductCatalog%27&$top=10&$skiptoken=4010",
            "rel": "next"
          }
        }
      ],
      "entry": [
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.036Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.185')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0153.185"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP SD Brillant base part complet SS"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612980429998"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0153.185"
              }
            }
          }
        },
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.036Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.187')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0153.187"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP SD Tango Inox base part complet SS"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612980430017"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0153.187"
              }
            }
          }
        },
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.037Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.547')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0556.547"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP hob power unit 75.96475.601/SW V1.33"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612985592581"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0556.547"
              }
            }
          }
        },
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.037Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.188')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0153.188"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP SD Radia straigh base part chrome"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612980430024"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0153.188"
              }
            }
          }
        },
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.037Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0556.548')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0556.548"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP hob power unit 75.96475.606/SW V1.33"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612985592598"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0556.548"
              }
            }
          }
        },
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.037Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.459')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0370.459"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP hood Glass cover for EUL XS/60 V2"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612981584085"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0370.459"
              }
            }
          }
        },
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.037Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.519')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0370.519"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP hood Glass cover for EUL XS/90 V2"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612981585334"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0370.519"
              }
            }
          }
        },
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.037Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0552.342')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0552.342"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP hob fixing sup. rear front FHFS786"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612985565981"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0552.342"
              }
            }
          }
        },
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.037Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0370.544')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0370.544"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP hood Extension lead 10m includ. plug"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612981585341"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0370.544"
              }
            }
          }
        },
        {
          "id": {
            "_text": "https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com:443/odata2webservices/InboundProduct/Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')"
          },
          "title": {
            "_attributes": {
              "type": "text"
            },
            "_text": "Products"
          },
          "updated": {
            "_text": "2019-08-10T12:40:02.037Z"
          },
          "category": {
            "_attributes": {
              "term": "HybrisCommerceOData.Product",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          },
          "link": [
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')",
                "rel": "edit",
                "title": "Product"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/Europe1PriceFactory_PPG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PPG",
                "title": "Europe1PriceFactory_PPG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/catalogVersion",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/catalogVersion",
                "title": "catalogVersion",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/pricerow",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/pricerow",
                "title": "pricerow",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/Europe1PriceFactory_PDG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PDG",
                "title": "Europe1PriceFactory_PDG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/unit",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/unit",
                "title": "unit",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/sapPlant",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/sapPlant",
                "title": "sapPlant",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/Europe1PriceFactory_PTG",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Europe1PriceFactory_PTG",
                "title": "Europe1PriceFactory_PTG",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/variantType",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/variantType",
                "title": "variantType",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/supercategories",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/supercategories",
                "title": "supercategories",
                "type": "application/atom+xml;type=feed"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/productSalesStatus",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/productSalesStatus",
                "title": "productSalesStatus",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/frankeSapItemCategory",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapItemCategory",
                "title": "frankeSapItemCategory",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/frankeSapProxyProduct",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/frankeSapProxyProduct",
                "title": "frankeSapProxyProduct",
                "type": "application/atom+xml;type=entry"
              }
            },
            {
              "_attributes": {
                "href": "Products('Staged%7CB2B-FKTProductCatalog%7C133.0153.174')/localizedAttributes",
                "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/localizedAttributes",
                "title": "localizedAttributes",
                "type": "application/atom+xml;type=feed"
              }
            }
          ],
          "content": {
            "_attributes": {
              "type": "application/xml"
            },
            "m:properties": {
              "d:code": {
                "_text": "133.0153.174"
              },
              "d:sapBlockedDate": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:name": {
                "_text": "SP SD Novita Inox base parte compl SS"
              },
              "d:sapConfigurable": {
                "_text": "false"
              },
              "d:sapBaseUnitConversion": {
                "_text": "1.0"
              },
              "d:sapEAN": {
                "_text": "7612980429929"
              },
              "d:sapBlocked": {
                "_text": "false"
              },
              "d:localSalesNumber": {},
              "d:summary": {
                "_attributes": {
                  "m:null": "true"
                }
              },
              "d:integrationKey": {
                "_text": "Staged|B2B-FKTProductCatalog|133.0153.174"
              }
            }
          }
        }
      ]
    }
  }
  var result = jsonQuery('feed.id', {data: data}).value

  console.log(data.feed.entry[0])