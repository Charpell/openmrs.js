module.exports = {
  "swagger" : "2.0",
  "info" : {
    "version" : "1.11.6",
    "title" : "OpenMRS API Docs",
    "description" : "OpenMRS RESTful API specification",
    "contact" : {
      "name" : "OpenMRS",
      "url" : "http://openmrs.org"
    },
    "license" : {
      "name" : "MPL-2.0 w/ HD",
      "url" : "http://openmrs.org/license"
    },
    "x-versions" : {
      "platform" : "1.11.6 SNAPSHOT Build 92b874",
      "modules" : [ {
        "name" : "atlas",
        "version" : "2.1"
      }, {
        "name" : "formentryapp",
        "version" : "1.2"
      }, {
        "name" : "reporting",
        "version" : "0.9.9-SNAPSHOT"
      }, {
        "name" : "metadatasharing",
        "version" : "1.1.10"
      }, {
        "name" : "idgen",
        "version" : "3.2"
      }, {
        "name" : "allergyui",
        "version" : "1.2"
      }, {
        "name" : "emrapi",
        "version" : "1.11.1"
      }, {
        "name" : "registrationapp",
        "version" : "1.3"
      }, {
        "name" : "htmlformentryui",
        "version" : "1.3"
      }, {
        "name" : "appframework",
        "version" : "2.4"
      }, {
        "name" : "reportingrest",
        "version" : "1.6-SNAPSHOT"
      }, {
        "name" : "referencemetadata",
        "version" : "2.3.1"
      }, {
        "name" : "metadatamapping",
        "version" : "1.0.2"
      }, {
        "name" : "adminui",
        "version" : "1.0"
      }, {
        "name" : "uiframework",
        "version" : "3.4"
      }, {
        "name" : "referenceapplication",
        "version" : "2.3"
      }, {
        "name" : "appui",
        "version" : "1.4"
      }, {
        "name" : "dhisconnector",
        "version" : "0.1.1"
      }, {
        "name" : "metadatadeploy",
        "version" : "1.5"
      }, {
        "name" : "htmlwidgets",
        "version" : "1.7.0"
      }, {
        "name" : "serialization.xstream",
        "version" : "0.2.10"
      }, {
        "name" : "registrationcore",
        "version" : "1.2"
      }, {
        "name" : "htmlformentry19ext",
        "version" : "1.6.1"
      }, {
        "name" : "coreapps",
        "version" : "1.7"
      }, {
        "name" : "event",
        "version" : "2.2.1"
      }, {
        "name" : "providermanagement",
        "version" : "2.3"
      }, {
        "name" : "chartsearch",
        "version" : "1.4.1"
      }, {
        "name" : "calculation",
        "version" : "1.1"
      }, {
        "name" : "allergyapi",
        "version" : "1.3"
      }, {
        "name" : "appointmentschedulingui",
        "version" : "1.0.3"
      }, {
        "name" : "owa",
        "version" : "1.3-SNAPSHOT"
      }, {
        "name" : "htmlformentry",
        "version" : "2.6"
      }, {
        "name" : "uicommons",
        "version" : "1.7"
      }, {
        "name" : "webservices.rest",
        "version" : "2.14-SNAPSHOT.f54116"
      }, {
        "name" : "appointmentscheduling",
        "version" : "1.4"
      }, {
        "name" : "dataexchange",
        "version" : "1.3.1"
      }, {
        "name" : "uilibrary",
        "version" : "2.0.4"
      } ]
    }
  },
  "host" : "localhost:8082/openmrs-standalone/ws/rest",
  "basePath" : "/v1",
  "tags" : [ {
    "name" : "allergy"
  }, {
    "name" : "app"
  }, {
    "name" : "appointmentscheduling/appointmentallowingoverbook"
  }, {
    "name" : "appointmentscheduling/appointmentblock"
  }, {
    "name" : "appointmentscheduling/appointmentrequest"
  }, {
    "name" : "appointmentscheduling/appointmenttype"
  }, {
    "name" : "appointmentscheduling/timeslot"
  }, {
    "name" : "apptemplate"
  }, {
    "name" : "caresetting"
  }, {
    "name" : "cohort"
  }, {
    "name" : "concept"
  }, {
    "name" : "conceptclass"
  }, {
    "name" : "conceptdatatype"
  }, {
    "name" : "conceptmaptype"
  }, {
    "name" : "conceptreferenceterm"
  }, {
    "name" : "conceptreferencetermmap"
  }, {
    "name" : "conceptsource"
  }, {
    "name" : "customdatatype"
  }, {
    "name" : "dhisconnector/dhiscategorycombos"
  }, {
    "name" : "dhisconnector/dhisdataelements"
  }, {
    "name" : "dhisconnector/dhisdatasets"
  }, {
    "name" : "dhisconnector/dhisdatavaluesets"
  }, {
    "name" : "dhisconnector/mappings"
  }, {
    "name" : "dhisconnector/orgunits"
  }, {
    "name" : "dhisconnector/periodindicatorreports"
  }, {
    "name" : "drug"
  }, {
    "name" : "encounter"
  }, {
    "name" : "encounterrole"
  }, {
    "name" : "encountertype"
  }, {
    "name" : "extension"
  }, {
    "name" : "field"
  }, {
    "name" : "fieldtype"
  }, {
    "name" : "form"
  }, {
    "name" : "hl7"
  }, {
    "name" : "hl7source"
  }, {
    "name" : "location"
  }, {
    "name" : "locationattributetype"
  }, {
    "name" : "locationtag"
  }, {
    "name" : "obs"
  }, {
    "name" : "order"
  }, {
    "name" : "orderfrequency"
  }, {
    "name" : "ordertype"
  }, {
    "name" : "patient"
  }, {
    "name" : "patientidentifiertype"
  }, {
    "name" : "patientprofile"
  }, {
    "name" : "person"
  }, {
    "name" : "personattributetype"
  }, {
    "name" : "personimage"
  }, {
    "name" : "privilege"
  }, {
    "name" : "problem"
  }, {
    "name" : "program"
  }, {
    "name" : "programenrollment"
  }, {
    "name" : "provider"
  }, {
    "name" : "providerattributetype"
  }, {
    "name" : "relationship"
  }, {
    "name" : "relationshiptype"
  }, {
    "name" : "reportingrest/cohort"
  }, {
    "name" : "reportingrest/cohortDefinition"
  }, {
    "name" : "reportingrest/dataSet"
  }, {
    "name" : "reportingrest/dataSetDefinition"
  }, {
    "name" : "reportingrest/reportdata"
  }, {
    "name" : "reportingrest/reportDefinition"
  }, {
    "name" : "reportingrest/reportRequest"
  }, {
    "name" : "role"
  }, {
    "name" : "systemsetting"
  }, {
    "name" : "user"
  }, {
    "name" : "visit"
  }, {
    "name" : "visitattributetype"
  }, {
    "name" : "visittype"
  }, {
    "name" : "workflow"
  } ],
  "consumes" : [ "application/json" ],
  "produces" : [ "application/json", "application/xml" ],
  "paths" : {
    "/relationship/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationship" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/RelationshipUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "relationship response",
            "schema" : {
              "$ref" : "#/definitions/RelationshipGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationship" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "relationship response",
            "schema" : {
              "$ref" : "#/definitions/RelationshipGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationship" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/form/{parent-uuid}/resource" : {
      "post" : {
        "summary" : "Create resource subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FormResourceCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "resource response",
            "schema" : {
              "$ref" : "#/definitions/FormResourceGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/orderfrequency" : {
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "orderfrequency" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "orderfrequency response",
            "schema" : {
              "$ref" : "#/definitions/OrderfrequencyGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/appointmentscheduling/appointmentrequest/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentrequest" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingAppointmentrequestUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/appointmentrequest response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentrequestGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentrequest" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "appointmentscheduling/appointmentrequest response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentrequestGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentrequest" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptclass/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptclass" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptclassUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptclass response",
            "schema" : {
              "$ref" : "#/definitions/ConceptclassGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptclass" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "conceptclass response",
            "schema" : {
              "$ref" : "#/definitions/ConceptclassGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptclass" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/form/{parent-uuid}/formfield/{uuid}" : {
      "post" : {
        "summary" : "Edit formfield subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FormFormfieldUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "formfield response",
            "schema" : {
              "$ref" : "#/definitions/FormFormfieldGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch formfield subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "formfield response",
            "schema" : {
              "$ref" : "#/definitions/FormFormfieldGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/privilege" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "privilege" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PrivilegeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "privilege response",
            "schema" : {
              "$ref" : "#/definitions/PrivilegeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/program" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "program" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProgramCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "program response",
            "schema" : {
              "$ref" : "#/definitions/ProgramGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "program" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "program response",
            "schema" : {
              "$ref" : "#/definitions/ProgramGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/order" : {
      "post" : {
        "description" : "Certain properties may be required depending on type",
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "order" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/OrderCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "order response",
            "schema" : {
              "$ref" : "#/definitions/OrderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/location" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/LocationCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "location response",
            "schema" : {
              "$ref" : "#/definitions/LocationGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "All search parameters are optional",
        "summary" : "Fetch all non-retired location resources or perform search",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "tag",
          "in" : "query",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "location response",
            "schema" : {
              "$ref" : "#/definitions/LocationGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/dataSetDefinition/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/dataSetDefinition" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ReportingrestDataSetDefinitionUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "reportingrest/dataSetDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestDataSetDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/dataSetDefinition" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "reportingrest/dataSetDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestDataSetDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/dataSetDefinition" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/caresetting" : {
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "caresetting" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "caresetting response",
            "schema" : {
              "$ref" : "#/definitions/CaresettingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/visit/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/VisitUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "visit response",
            "schema" : {
              "$ref" : "#/definitions/VisitGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "visit response",
            "schema" : {
              "$ref" : "#/definitions/VisitGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/encountertype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encountertype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/EncountertypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "encountertype response",
            "schema" : {
              "$ref" : "#/definitions/EncountertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encountertype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "encountertype response",
            "schema" : {
              "$ref" : "#/definitions/EncountertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/hl7/{uuid}" : { },
    "/concept/{parent-uuid}/mapping/{uuid}" : {
      "post" : {
        "summary" : "Edit mapping subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptMappingUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "mapping response",
            "schema" : {
              "$ref" : "#/definitions/ConceptMappingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch mapping subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "mapping response",
            "schema" : {
              "$ref" : "#/definitions/ConceptMappingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptmaptype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptmaptype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptmaptypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptmaptype response",
            "schema" : {
              "$ref" : "#/definitions/ConceptmaptypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptmaptype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "conceptmaptype response",
            "schema" : {
              "$ref" : "#/definitions/ConceptmaptypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptmaptype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/location/{parent-uuid}/attribute/{uuid}" : {
      "post" : {
        "summary" : "Edit attribute subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/LocationAttributeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/LocationAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch attribute subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/LocationAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/activelisttype" : { },
    "/dhisconnector/periodindicatorreports" : {
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/periodindicatorreports" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "dhisconnector/periodindicatorreports response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorPeriodindicatorreportsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/form/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FormUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "form response",
            "schema" : {
              "$ref" : "#/definitions/FormGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "form response",
            "schema" : {
              "$ref" : "#/definitions/FormGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/hl7source/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "hl7source" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/Hl7sourceUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "hl7source response",
            "schema" : {
              "$ref" : "#/definitions/Hl7sourceGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "hl7source" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/field/{parent-uuid}/answer" : {
      "post" : {
        "summary" : "Create answer subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FieldAnswerCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "answer response",
            "schema" : {
              "$ref" : "#/definitions/FieldAnswerGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired answer subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "answer response",
            "schema" : {
              "$ref" : "#/definitions/FieldAnswerGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/reportRequest" : { },
    "/problem/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "problem" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProblemUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "problem response",
            "schema" : {
              "$ref" : "#/definitions/ProblemGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "problem" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "problem response",
            "schema" : {
              "$ref" : "#/definitions/ProblemGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "problem" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/drug/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/DrugUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "drug response",
            "schema" : {
              "$ref" : "#/definitions/DrugGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "drug response",
            "schema" : {
              "$ref" : "#/definitions/DrugGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/dhisdatasets" : {
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhisdatasets" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "dhisconnector/dhisdatasets response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorDhisdatasetsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/person/{parent-uuid}/attribute" : {
      "post" : {
        "summary" : "Create attribute subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonAttributeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/PersonAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired attribute subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/PersonAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/encounter/{parent-uuid}/encounterprovider" : {
      "post" : {
        "summary" : "Create encounterprovider subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/EncounterEncounterproviderCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "encounterprovider response",
            "schema" : {
              "$ref" : "#/definitions/EncounterEncounterproviderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired encounterprovider subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "encounterprovider response",
            "schema" : {
              "$ref" : "#/definitions/EncounterEncounterproviderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/dhisdatavaluesets" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhisdatavaluesets" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/DhisconnectorDhisdatavaluesetsCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "dhisconnector/dhisdatavaluesets response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorDhisdatavaluesetsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/provider/{parent-uuid}/attribute" : {
      "post" : {
        "summary" : "Create attribute subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProviderAttributeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/ProviderAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired attribute subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/ProviderAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/dhisdataelements/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhisdataelements" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "dhisconnector/dhisdataelements response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorDhisdataelementsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhisdataelements" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/cohortDefinition/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/cohortDefinition" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ReportingrestCohortDefinitionUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "reportingrest/cohortDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestCohortDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/cohortDefinition" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "reportingrest/cohortDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestCohortDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/cohortDefinition" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/visit" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/VisitCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "visit response",
            "schema" : {
              "$ref" : "#/definitions/VisitGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "visit response",
            "schema" : {
              "$ref" : "#/definitions/VisitGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptsource/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptsource" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptsourceUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptsource response",
            "schema" : {
              "$ref" : "#/definitions/ConceptsourceGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptsource" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "conceptsource response",
            "schema" : {
              "$ref" : "#/definitions/ConceptsourceGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptsource" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/programenrollment/{parent-uuid}/state" : {
      "post" : {
        "summary" : "Create state subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "programenrollment" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProgramenrollmentStateCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "state response",
            "schema" : {
              "$ref" : "#/definitions/ProgramenrollmentStateGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/concept/{parent-uuid}/name/{uuid}" : {
      "post" : {
        "summary" : "Edit name subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptNameUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "name response",
            "schema" : {
              "$ref" : "#/definitions/ConceptNameGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch name subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "name response",
            "schema" : {
              "$ref" : "#/definitions/ConceptNameGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/extension" : { },
    "/app" : {
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "app" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "app response",
            "schema" : {
              "$ref" : "#/definitions/AppGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/patientidentifiertype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patientidentifiertype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PatientidentifiertypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "patientidentifiertype response",
            "schema" : {
              "$ref" : "#/definitions/PatientidentifiertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patientidentifiertype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "patientidentifiertype response",
            "schema" : {
              "$ref" : "#/definitions/PatientidentifiertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patientidentifiertype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptmaptype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptmaptype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptmaptypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptmaptype response",
            "schema" : {
              "$ref" : "#/definitions/ConceptmaptypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptmaptype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "conceptmaptype response",
            "schema" : {
              "$ref" : "#/definitions/ConceptmaptypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/activelisttype/{uuid}" : { },
    "/appointmentscheduling/appointmentallowingoverbook/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentallowingoverbook" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingAppointmentallowingoverbookUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/appointmentallowingoverbook response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentallowingoverbookGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentallowingoverbook" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "appointmentscheduling/appointmentallowingoverbook response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentallowingoverbookGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentallowingoverbook" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/cohort/{parent-uuid}/member/{uuid}" : {
      "post" : {
        "summary" : "Edit member subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/CohortMemberUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "member response",
            "schema" : {
              "$ref" : "#/definitions/CohortMemberGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch member subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "member response",
            "schema" : {
              "$ref" : "#/definitions/CohortMemberGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/mappings/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/mappings" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/DhisconnectorMappingsUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "dhisconnector/mappings response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorMappingsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/mappings" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "dhisconnector/mappings response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorMappingsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/mappings" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/patientprofile/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patientprofile" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PatientprofileUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "patientprofile response",
            "schema" : {
              "$ref" : "#/definitions/PatientprofileGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/orgunits/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/orgunits" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "dhisconnector/orgunits response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorOrgunitsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/orgunits" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/cohort/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/CohortUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "cohort response",
            "schema" : {
              "$ref" : "#/definitions/CohortGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "cohort response",
            "schema" : {
              "$ref" : "#/definitions/CohortGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/apptemplate" : {
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "apptemplate" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "apptemplate response",
            "schema" : {
              "$ref" : "#/definitions/ApptemplateGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/provider/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProviderUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "provider response",
            "schema" : {
              "$ref" : "#/definitions/ProviderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "provider response",
            "schema" : {
              "$ref" : "#/definitions/ProviderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/role/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "role" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/RoleUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "role response",
            "schema" : {
              "$ref" : "#/definitions/RoleGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "role" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "role response",
            "schema" : {
              "$ref" : "#/definitions/RoleGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "role" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/concept/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "concept response",
            "schema" : {
              "$ref" : "#/definitions/ConceptGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "concept response",
            "schema" : {
              "$ref" : "#/definitions/ConceptGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/patient/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PatientUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "patient response",
            "schema" : {
              "$ref" : "#/definitions/PatientGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "patient response",
            "schema" : {
              "$ref" : "#/definitions/PatientGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/dataSet/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/dataSet" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "reportingrest/dataSet response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestDataSetGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/dataSet" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/orgunits" : {
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/orgunits" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "dhisconnector/orgunits response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorOrgunitsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/dhisdatavaluesets/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhisdatavaluesets" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/DhisconnectorDhisdatavaluesetsUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "dhisconnector/dhisdatavaluesets response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorDhisdatavaluesetsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhisdatavaluesets" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "dhisconnector/dhisdatavaluesets response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorDhisdatavaluesetsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhisdatavaluesets" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/periodindicatorreports/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/periodindicatorreports" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "dhisconnector/periodindicatorreports response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorPeriodindicatorreportsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/periodindicatorreports" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/dataSetDefinition" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/dataSetDefinition" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ReportingrestDataSetDefinitionCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "reportingrest/dataSetDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestDataSetDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/dataSetDefinition" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "reportingrest/dataSetDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestDataSetDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/encounterrole" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounterrole" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/EncounterroleCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "encounterrole response",
            "schema" : {
              "$ref" : "#/definitions/EncounterroleGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounterrole" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "encounterrole response",
            "schema" : {
              "$ref" : "#/definitions/EncounterroleGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/appointmentscheduling/appointmentrequest" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentrequest" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingAppointmentrequestCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/appointmentrequest response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentrequestGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentrequest" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "appointmentscheduling/appointmentrequest response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentrequestGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/appointmentscheduling/timeslot" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/timeslot" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingTimeslotCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/timeslot response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingTimeslotGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/timeslot" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "appointmentscheduling/timeslot response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingTimeslotGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/reportdata/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/reportdata" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "reportingrest/reportdata response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestReportdataGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/reportdata" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/relationshiptype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationshiptype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/RelationshiptypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "relationshiptype response",
            "schema" : {
              "$ref" : "#/definitions/RelationshiptypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationshiptype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "relationshiptype response",
            "schema" : {
              "$ref" : "#/definitions/RelationshiptypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/cohort/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/cohort" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "reportingrest/cohort response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestCohortGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/cohort" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/extension/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "extension" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "extension response",
            "schema" : {
              "$ref" : "#/definitions/ExtensionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/form/{parent-uuid}/resource/{uuid}" : {
      "post" : {
        "summary" : "Edit resource subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FormResourceUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "resource response",
            "schema" : {
              "$ref" : "#/definitions/FormResourceGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/customdatatype/{parent-uuid}/handlers" : {
      "get" : {
        "summary" : "Fetch all non-retired handlers subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "customdatatype" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "handlers response",
            "schema" : {
              "$ref" : "#/definitions/CustomdatatypeHandlersGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/field" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FieldCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "field response",
            "schema" : {
              "$ref" : "#/definitions/FieldGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "field response",
            "schema" : {
              "$ref" : "#/definitions/FieldGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptreferenceterm/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferenceterm" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptreferencetermUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptreferenceterm response",
            "schema" : {
              "$ref" : "#/definitions/ConceptreferencetermGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferenceterm" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "conceptreferenceterm response",
            "schema" : {
              "$ref" : "#/definitions/ConceptreferencetermGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferenceterm" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/appointmentscheduling/appointmenttype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmenttype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingAppointmenttypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/appointmenttype response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmenttypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmenttype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "appointmentscheduling/appointmenttype response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmenttypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmenttype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/dhiscategorycombos" : { },
    "/orderfrequency/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "orderfrequency" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/OrderfrequencyUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "orderfrequency response",
            "schema" : {
              "$ref" : "#/definitions/OrderfrequencyGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "orderfrequency" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "orderfrequency response",
            "schema" : {
              "$ref" : "#/definitions/OrderfrequencyGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "orderfrequency" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/field/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FieldUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "field response",
            "schema" : {
              "$ref" : "#/definitions/FieldGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "field response",
            "schema" : {
              "$ref" : "#/definitions/FieldGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptreferencetermmap/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferencetermmap" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptreferencetermmapUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptreferencetermmap response",
            "schema" : {
              "$ref" : "#/definitions/ConceptreferencetermmapGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferencetermmap" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "conceptreferencetermmap response",
            "schema" : {
              "$ref" : "#/definitions/ConceptreferencetermmapGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferencetermmap" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/programenrollment/{parent-uuid}/state/{uuid}" : {
      "post" : {
        "summary" : "Edit state subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "programenrollment" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProgramenrollmentStateUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "state response",
            "schema" : {
              "$ref" : "#/definitions/ProgramenrollmentStateGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch state subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "programenrollment" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "state response",
            "schema" : {
              "$ref" : "#/definitions/ProgramenrollmentStateGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "programenrollment" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/patientidentifiertype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patientidentifiertype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PatientidentifiertypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "patientidentifiertype response",
            "schema" : {
              "$ref" : "#/definitions/PatientidentifiertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patientidentifiertype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "patientidentifiertype response",
            "schema" : {
              "$ref" : "#/definitions/PatientidentifiertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/reportRequest/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/reportRequest" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "reportingrest/reportRequest response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestReportRequestGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/reportRequest" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/cohort" : { },
    "/conceptdatatype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptdatatype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptdatatypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptdatatype response",
            "schema" : {
              "$ref" : "#/definitions/ConceptdatatypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptdatatype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "conceptdatatype response",
            "schema" : {
              "$ref" : "#/definitions/ConceptdatatypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/fieldtype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "fieldtype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FieldtypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "fieldtype response",
            "schema" : {
              "$ref" : "#/definitions/FieldtypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "fieldtype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "fieldtype response",
            "schema" : {
              "$ref" : "#/definitions/FieldtypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/personimage/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "personimage" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonimageUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "personimage response",
            "schema" : {
              "$ref" : "#/definitions/PersonimageGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "personimage" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "personimage response",
            "schema" : {
              "$ref" : "#/definitions/PersonimageGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "personimage" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/drug/{parent-uuid}/ingredient/{uuid}" : {
      "post" : {
        "summary" : "Edit ingredient subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/DrugIngredientUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "ingredient response",
            "schema" : {
              "$ref" : "#/definitions/DrugIngredientGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch ingredient subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "ingredient response",
            "schema" : {
              "$ref" : "#/definitions/DrugIngredientGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptsearch" : { },
    "/appointmentscheduling/timeslot/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/timeslot" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingTimeslotUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/timeslot response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingTimeslotGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/timeslot" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "appointmentscheduling/timeslot response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingTimeslotGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/timeslot" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/privilege/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "privilege" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PrivilegeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "privilege response",
            "schema" : {
              "$ref" : "#/definitions/PrivilegeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "privilege" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/person/{parent-uuid}/name/{uuid}" : {
      "post" : {
        "summary" : "Edit name subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonNameUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "name response",
            "schema" : {
              "$ref" : "#/definitions/PersonNameGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch name subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "name response",
            "schema" : {
              "$ref" : "#/definitions/PersonNameGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/concept/{parent-uuid}/name" : {
      "post" : {
        "summary" : "Create name subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptNameCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "name response",
            "schema" : {
              "$ref" : "#/definitions/ConceptNameGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired name subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "name response",
            "schema" : {
              "$ref" : "#/definitions/ConceptNameGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/workflow/{parent-uuid}/state/{uuid}" : {
      "get" : {
        "summary" : "Fetch state subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "workflow" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "state response",
            "schema" : {
              "$ref" : "#/definitions/WorkflowStateGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "workflow" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/person" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "person response",
            "schema" : {
              "$ref" : "#/definitions/PersonGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/locationattributetype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "locationattributetype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/LocationattributetypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "locationattributetype response",
            "schema" : {
              "$ref" : "#/definitions/LocationattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "locationattributetype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "locationattributetype response",
            "schema" : {
              "$ref" : "#/definitions/LocationattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/encounter/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/EncounterUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "encounter response",
            "schema" : {
              "$ref" : "#/definitions/EncounterGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "encounter response",
            "schema" : {
              "$ref" : "#/definitions/EncounterGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/ordertype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "ordertype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/OrdertypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "ordertype response",
            "schema" : {
              "$ref" : "#/definitions/OrdertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "ordertype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "ordertype response",
            "schema" : {
              "$ref" : "#/definitions/OrdertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "ordertype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/visit/{parent-uuid}/attribute" : {
      "post" : {
        "summary" : "Create attribute subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/VisitAttributeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/VisitAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired attribute subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/VisitAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptsource" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptsource" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptsourceCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptsource response",
            "schema" : {
              "$ref" : "#/definitions/ConceptsourceGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptsource" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "conceptsource response",
            "schema" : {
              "$ref" : "#/definitions/ConceptsourceGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/reportDefinition" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/reportDefinition" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ReportingrestReportDefinitionCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "reportingrest/reportDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestReportDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/reportDefinition" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "reportingrest/reportDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestReportDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/form/{parent-uuid}/formfield" : {
      "post" : {
        "summary" : "Create formfield subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FormFormfieldCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "formfield response",
            "schema" : {
              "$ref" : "#/definitions/FormFormfieldGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired formfield subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "formfield response",
            "schema" : {
              "$ref" : "#/definitions/FormFormfieldGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/customdatatype/{parent-uuid}/handlers/{uuid}" : { },
    "/appointmentscheduling/appointmentblock" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentblock" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingAppointmentblockCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/appointmentblock response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentblockGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentblock" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "appointmentscheduling/appointmentblock response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentblockGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/appointmentscheduling/appointmentblock/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentblock" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingAppointmentblockUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/appointmentblock response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentblockGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentblock" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "appointmentscheduling/appointmentblock response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentblockGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentblock" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/apptemplate/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "apptemplate" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "apptemplate response",
            "schema" : {
              "$ref" : "#/definitions/ApptemplateGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/encounter" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/EncounterCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "encounter response",
            "schema" : {
              "$ref" : "#/definitions/EncounterGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "At least one search parameter must be specified",
        "summary" : "Search for encounter",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "patient",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Must be used with patient or encounterType",
          "type" : "string"
        }, {
          "name" : "fromdate",
          "in" : "query",
          "description" : "Must be used with patient or encounterType",
          "type" : "string"
        }, {
          "name" : "todate",
          "in" : "query",
          "description" : "Must be used with patient or encounterType",
          "type" : "string"
        }, {
          "name" : "encounterType",
          "in" : "query",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "encounter response",
            "schema" : { }
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/programenrollment" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "programenrollment" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProgramenrollmentCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "programenrollment response",
            "schema" : {
              "$ref" : "#/definitions/ProgramenrollmentGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptreferenceterm" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferenceterm" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptreferencetermCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptreferenceterm response",
            "schema" : {
              "$ref" : "#/definitions/ConceptreferencetermGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "All search parameters are optional",
        "summary" : "Fetch all non-retired conceptreferenceterm resources or perform search",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferenceterm" ],
        "parameters" : [ {
          "name" : "source",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Must be used with source",
          "type" : "string"
        }, {
          "name" : "code",
          "in" : "query",
          "description" : "Must be used with source",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "conceptreferenceterm response",
            "schema" : {
              "$ref" : "#/definitions/ConceptreferencetermGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/patient/{parent-uuid}/identifier" : {
      "post" : {
        "summary" : "Create identifier subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PatientIdentifierCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "identifier response",
            "schema" : {
              "$ref" : "#/definitions/PatientIdentifierGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired identifier subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "identifier response",
            "schema" : {
              "$ref" : "#/definitions/PatientIdentifierGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/visittype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visittype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/VisittypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "visittype response",
            "schema" : {
              "$ref" : "#/definitions/VisittypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visittype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "visittype response",
            "schema" : {
              "$ref" : "#/definitions/VisittypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visittype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/provider/{parent-uuid}/attribute/{uuid}" : {
      "post" : {
        "summary" : "Edit attribute subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProviderAttributeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/ProviderAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch attribute subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/ProviderAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/workflow/{parent-uuid}/state" : {
      "get" : {
        "summary" : "Fetch all non-retired state subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "workflow" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "state response",
            "schema" : {
              "$ref" : "#/definitions/WorkflowStateGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/encounterrole/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounterrole" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/EncounterroleUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "encounterrole response",
            "schema" : {
              "$ref" : "#/definitions/EncounterroleGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounterrole" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "encounterrole response",
            "schema" : {
              "$ref" : "#/definitions/EncounterroleGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounterrole" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/role" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "role" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/RoleCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "role response",
            "schema" : {
              "$ref" : "#/definitions/RoleGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "role" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "role response",
            "schema" : {
              "$ref" : "#/definitions/RoleGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/personimage" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "personimage" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonimageCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "personimage response",
            "schema" : {
              "$ref" : "#/definitions/PersonimageGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/systemsetting/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "systemsetting" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/SystemsettingUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "systemsetting response",
            "schema" : {
              "$ref" : "#/definitions/SystemsettingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "systemsetting" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "systemsetting response",
            "schema" : {
              "$ref" : "#/definitions/SystemsettingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "systemsetting" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/person/{parent-uuid}/address/{uuid}" : {
      "post" : {
        "summary" : "Edit address subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonAddressUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "address response",
            "schema" : {
              "$ref" : "#/definitions/PersonAddressGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch address subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "address response",
            "schema" : {
              "$ref" : "#/definitions/PersonAddressGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/location/{parent-uuid}/attribute" : {
      "post" : {
        "summary" : "Create attribute subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/LocationAttributeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/LocationAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired attribute subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/LocationAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptclass" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptclass" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptclassCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptclass response",
            "schema" : {
              "$ref" : "#/definitions/ConceptclassGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptclass" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "conceptclass response",
            "schema" : {
              "$ref" : "#/definitions/ConceptclassGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/appointmentscheduling/appointmentallowingoverbook" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentallowingoverbook" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingAppointmentallowingoverbookCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/appointmentallowingoverbook response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentallowingoverbookGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmentallowingoverbook" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "appointmentscheduling/appointmentallowingoverbook response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmentallowingoverbookGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/dhisdatasets/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhisdatasets" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "dhisconnector/dhisdatasets response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorDhisdatasetsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhisdatasets" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/customdatatype/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "customdatatype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "customdatatype response",
            "schema" : {
              "$ref" : "#/definitions/CustomdatatypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "customdatatype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/drug" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/DrugCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "drug response",
            "schema" : {
              "$ref" : "#/definitions/DrugGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "All search parameters are optional",
        "summary" : "Fetch all non-retired drug resources or perform search",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "source",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "preferredMapTypes",
          "in" : "query",
          "description" : "Must be used with source",
          "type" : "string"
        }, {
          "name" : "q",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "locale",
          "in" : "query",
          "description" : "Must be used with q",
          "type" : "string"
        }, {
          "name" : "code",
          "in" : "query",
          "description" : "Must be used with source",
          "type" : "string"
        }, {
          "name" : "exactLocale",
          "in" : "query",
          "description" : "Must be used with q",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "drug response",
            "schema" : {
              "$ref" : "#/definitions/DrugGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/dhisdataelements" : { },
    "/visitattributetype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visitattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/VisitattributetypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "visitattributetype response",
            "schema" : {
              "$ref" : "#/definitions/VisitattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visitattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "visitattributetype response",
            "schema" : {
              "$ref" : "#/definitions/VisitattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visitattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/patient/{parent-uuid}/identifier/{uuid}" : {
      "post" : {
        "summary" : "Edit identifier subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PatientIdentifierUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "identifier response",
            "schema" : {
              "$ref" : "#/definitions/PatientIdentifierGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch identifier subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "identifier response",
            "schema" : {
              "$ref" : "#/definitions/PatientIdentifierGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/providerattributetype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "providerattributetype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProviderattributetypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "providerattributetype response",
            "schema" : {
              "$ref" : "#/definitions/ProviderattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "providerattributetype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "providerattributetype response",
            "schema" : {
              "$ref" : "#/definitions/ProviderattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/locationattributetype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "locationattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/LocationattributetypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "locationattributetype response",
            "schema" : {
              "$ref" : "#/definitions/LocationattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "locationattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "locationattributetype response",
            "schema" : {
              "$ref" : "#/definitions/LocationattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "locationattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/visittype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visittype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/VisittypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "visittype response",
            "schema" : {
              "$ref" : "#/definitions/VisittypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visittype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "visittype response",
            "schema" : {
              "$ref" : "#/definitions/VisittypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/obs" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "obs" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ObsCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "obs response",
            "schema" : {
              "$ref" : "#/definitions/ObsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "At least one search parameter must be specified",
        "summary" : "Search for obs",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "obs" ],
        "parameters" : [ {
          "name" : "concept",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "patient",
          "in" : "query",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "obs response",
            "schema" : { }
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/problem" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "problem" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProblemCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "problem response",
            "schema" : {
              "$ref" : "#/definitions/ProblemGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/drug/{parent-uuid}/ingredient" : {
      "post" : {
        "summary" : "Create ingredient subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/DrugIngredientCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "ingredient response",
            "schema" : {
              "$ref" : "#/definitions/DrugIngredientGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired ingredient subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "drug" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "ingredient response",
            "schema" : {
              "$ref" : "#/definitions/DrugIngredientGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/user" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "user" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/UserCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "user response",
            "schema" : {
              "$ref" : "#/definitions/UserGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "All search parameters are optional",
        "summary" : "Fetch all non-retired user resources or perform search",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "user" ],
        "parameters" : [ {
          "name" : "username",
          "in" : "query",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "user response",
            "schema" : {
              "$ref" : "#/definitions/UserGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/location/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/LocationUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "location response",
            "schema" : {
              "$ref" : "#/definitions/LocationGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "location response",
            "schema" : {
              "$ref" : "#/definitions/LocationGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "location" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/hl7" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "hl7" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/Hl7Create"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "hl7 response",
            "schema" : {
              "$ref" : "#/definitions/Hl7Get"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/person/{parent-uuid}/name" : {
      "post" : {
        "summary" : "Create name subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonNameCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "name response",
            "schema" : {
              "$ref" : "#/definitions/PersonNameGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired name subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "name response",
            "schema" : {
              "$ref" : "#/definitions/PersonNameGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/cohort" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/CohortCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "cohort response",
            "schema" : {
              "$ref" : "#/definitions/CohortGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "cohort response",
            "schema" : {
              "$ref" : "#/definitions/CohortGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/patientprofile" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patientprofile" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PatientprofileCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "patientprofile response",
            "schema" : {
              "$ref" : "#/definitions/PatientprofileGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/reportdata" : { },
    "/fieldtype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "fieldtype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FieldtypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "fieldtype response",
            "schema" : {
              "$ref" : "#/definitions/FieldtypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "fieldtype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "fieldtype response",
            "schema" : {
              "$ref" : "#/definitions/FieldtypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "fieldtype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/order/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "order" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "order response",
            "schema" : {
              "$ref" : "#/definitions/OrderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "order" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/dhiscategorycombos/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhiscategorycombos" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "dhisconnector/dhiscategorycombos response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorDhiscategorycombosGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/dhiscategorycombos" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/obs/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "obs" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ObsUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "obs response",
            "schema" : {
              "$ref" : "#/definitions/ObsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "obs" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "obs response",
            "schema" : {
              "$ref" : "#/definitions/ObsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "obs" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptsearch/{uuid}" : { },
    "/allergy" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "allergy" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AllergyCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "allergy response",
            "schema" : {
              "$ref" : "#/definitions/AllergyGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/locationtag/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "locationtag" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/LocationtagUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "locationtag response",
            "schema" : {
              "$ref" : "#/definitions/LocationtagGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "locationtag" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/workflow" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "workflow" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/WorkflowCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "workflow response",
            "schema" : {
              "$ref" : "#/definitions/WorkflowGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/concept" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "concept response",
            "schema" : {
              "$ref" : "#/definitions/ConceptGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "All search parameters are optional",
        "summary" : "Fetch all non-retired concept resources or perform search",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "source",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "term",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "name",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "code",
          "in" : "query",
          "description" : "Must be used with source",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "concept response",
            "schema" : {
              "$ref" : "#/definitions/ConceptGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/providerattributetype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "providerattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProviderattributetypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "providerattributetype response",
            "schema" : {
              "$ref" : "#/definitions/ProviderattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "providerattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "providerattributetype response",
            "schema" : {
              "$ref" : "#/definitions/ProviderattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "providerattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/workflow/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "workflow" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/WorkflowUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "workflow response",
            "schema" : {
              "$ref" : "#/definitions/WorkflowGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "workflow" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "workflow response",
            "schema" : {
              "$ref" : "#/definitions/WorkflowGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "workflow" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/hl7source" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "hl7source" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/Hl7sourceCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "hl7source response",
            "schema" : {
              "$ref" : "#/definitions/Hl7sourceGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/locationtag" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "locationtag" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/LocationtagCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "locationtag response",
            "schema" : {
              "$ref" : "#/definitions/LocationtagGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/dataSet" : { },
    "/caresetting/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "caresetting" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "caresetting response",
            "schema" : {
              "$ref" : "#/definitions/CaresettingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "caresetting" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/ordertype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "ordertype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/OrdertypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "ordertype response",
            "schema" : {
              "$ref" : "#/definitions/OrdertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "ordertype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "ordertype response",
            "schema" : {
              "$ref" : "#/definitions/OrdertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/concept/{parent-uuid}/description/{uuid}" : {
      "post" : {
        "summary" : "Edit description subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptDescriptionUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "description response",
            "schema" : {
              "$ref" : "#/definitions/ConceptDescriptionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch description subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "description response",
            "schema" : {
              "$ref" : "#/definitions/ConceptDescriptionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/relationship" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationship" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/RelationshipCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "relationship response",
            "schema" : {
              "$ref" : "#/definitions/RelationshipGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "All search parameters are optional",
        "summary" : "Fetch all non-retired relationship resources or perform search",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationship" ],
        "parameters" : [ {
          "name" : "relatedPerson",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "person",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "relation",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "personA",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "personB",
          "in" : "query",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "relationship response",
            "schema" : {
              "$ref" : "#/definitions/RelationshipGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/form" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FormCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "form response",
            "schema" : {
              "$ref" : "#/definitions/FormGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "form" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "form response",
            "schema" : {
              "$ref" : "#/definitions/FormGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/person/{parent-uuid}/address" : {
      "post" : {
        "summary" : "Create address subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonAddressCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "address response",
            "schema" : {
              "$ref" : "#/definitions/PersonAddressGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired address subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "address response",
            "schema" : {
              "$ref" : "#/definitions/PersonAddressGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/systemsetting" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "systemsetting" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/SystemsettingCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "systemsetting response",
            "schema" : {
              "$ref" : "#/definitions/SystemsettingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "systemsetting" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "systemsetting response",
            "schema" : {
              "$ref" : "#/definitions/SystemsettingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/person/{parent-uuid}/attribute/{uuid}" : {
      "post" : {
        "summary" : "Edit attribute subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonAttributeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/PersonAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch attribute subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/PersonAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptdatatype/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptdatatype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "conceptdatatype response",
            "schema" : {
              "$ref" : "#/definitions/ConceptdatatypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptdatatype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/visitattributetype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visitattributetype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/VisitattributetypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "visitattributetype response",
            "schema" : {
              "$ref" : "#/definitions/VisitattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visitattributetype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "visitattributetype response",
            "schema" : {
              "$ref" : "#/definitions/VisitattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/dhisconnector/mappings" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/mappings" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/DhisconnectorMappingsCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "dhisconnector/mappings response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorMappingsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "dhisconnector/mappings" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "dhisconnector/mappings response",
            "schema" : {
              "$ref" : "#/definitions/DhisconnectorMappingsGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/customdatatype" : {
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "customdatatype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "customdatatype response",
            "schema" : {
              "$ref" : "#/definitions/CustomdatatypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/personattributetype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "personattributetype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonattributetypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "personattributetype response",
            "schema" : {
              "$ref" : "#/definitions/PersonattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "personattributetype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "personattributetype response",
            "schema" : {
              "$ref" : "#/definitions/PersonattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/conceptreferencetermmap" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferencetermmap" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptreferencetermmapCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "conceptreferencetermmap response",
            "schema" : {
              "$ref" : "#/definitions/ConceptreferencetermmapGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "At least one search parameter must be specified",
        "summary" : "Search for conceptreferencetermmap",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "conceptreferencetermmap" ],
        "parameters" : [ {
          "name" : "to",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "maps",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "termA",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "termB",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "maptype",
          "in" : "query",
          "description" : "Must be used with termB",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "conceptreferencetermmap response",
            "schema" : { }
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/encountertype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encountertype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/EncountertypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "encountertype response",
            "schema" : {
              "$ref" : "#/definitions/EncountertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encountertype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "encountertype response",
            "schema" : {
              "$ref" : "#/definitions/EncountertypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encountertype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/appointmentscheduling/appointmenttype" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmenttype" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AppointmentschedulingAppointmenttypeCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "appointmentscheduling/appointmenttype response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmenttypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "appointmentscheduling/appointmenttype" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "appointmentscheduling/appointmenttype response",
            "schema" : {
              "$ref" : "#/definitions/AppointmentschedulingAppointmenttypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/concept/{parent-uuid}/description" : {
      "post" : {
        "summary" : "Create description subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptDescriptionCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "description response",
            "schema" : {
              "$ref" : "#/definitions/ConceptDescriptionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired description subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "description response",
            "schema" : {
              "$ref" : "#/definitions/ConceptDescriptionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/personattributetype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "personattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonattributetypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "personattributetype response",
            "schema" : {
              "$ref" : "#/definitions/PersonattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "personattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "personattributetype response",
            "schema" : {
              "$ref" : "#/definitions/PersonattributetypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "personattributetype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/provider" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProviderCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "provider response",
            "schema" : {
              "$ref" : "#/definitions/ProviderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "All search parameters are optional",
        "summary" : "Fetch all non-retired provider resources or perform search",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "provider" ],
        "parameters" : [ {
          "name" : "user",
          "in" : "query",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "provider response",
            "schema" : {
              "$ref" : "#/definitions/ProviderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/visit/{parent-uuid}/attribute/{uuid}" : {
      "post" : {
        "summary" : "Edit attribute subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/VisitAttributeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/VisitAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch attribute subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "attribute response",
            "schema" : {
              "$ref" : "#/definitions/VisitAttributeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "visit" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/app/{uuid}" : {
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "app" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "app response",
            "schema" : {
              "$ref" : "#/definitions/AppGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/field/{parent-uuid}/answer/{uuid}" : {
      "post" : {
        "summary" : "Edit answer subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/FieldAnswerUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "answer response",
            "schema" : {
              "$ref" : "#/definitions/FieldAnswerGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch answer subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "answer response",
            "schema" : {
              "$ref" : "#/definitions/FieldAnswerGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "field" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/reportDefinition/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/reportDefinition" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ReportingrestReportDefinitionUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "reportingrest/reportDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestReportDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/reportDefinition" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "reportingrest/reportDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestReportDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/reportDefinition" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/relationshiptype/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationshiptype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/RelationshiptypeUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "relationshiptype response",
            "schema" : {
              "$ref" : "#/definitions/RelationshiptypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationshiptype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "relationshiptype response",
            "schema" : {
              "$ref" : "#/definitions/RelationshiptypeGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "relationshiptype" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/reportingrest/cohortDefinition" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/cohortDefinition" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ReportingrestCohortDefinitionCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "reportingrest/cohortDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestCohortDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "reportingrest/cohortDefinition" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "reportingrest/cohortDefinition response",
            "schema" : {
              "$ref" : "#/definitions/ReportingrestCohortDefinitionGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/program/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "program" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProgramUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "program response",
            "schema" : {
              "$ref" : "#/definitions/ProgramGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "program" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "program response",
            "schema" : {
              "$ref" : "#/definitions/ProgramGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "program" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/concept/{parent-uuid}/mapping" : {
      "post" : {
        "summary" : "Create mapping subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ConceptMappingCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "mapping response",
            "schema" : {
              "$ref" : "#/definitions/ConceptMappingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired mapping subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "concept" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "mapping response",
            "schema" : {
              "$ref" : "#/definitions/ConceptMappingGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/allergy/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "allergy" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/AllergyUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "allergy response",
            "schema" : {
              "$ref" : "#/definitions/AllergyGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "allergy" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "allergy response",
            "schema" : {
              "$ref" : "#/definitions/AllergyGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "allergy" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/person/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PersonUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "person response",
            "schema" : {
              "$ref" : "#/definitions/PersonGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "person response",
            "schema" : {
              "$ref" : "#/definitions/PersonGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "person" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/encounter/{parent-uuid}/encounterprovider/{uuid}" : {
      "post" : {
        "summary" : "Edit encounterprovider subresource with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/EncounterEncounterproviderUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "encounterprovider response",
            "schema" : {
              "$ref" : "#/definitions/EncounterEncounterproviderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch encounterprovider subresources by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "encounterprovider response",
            "schema" : {
              "$ref" : "#/definitions/EncounterEncounterproviderGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "encounter" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/patient" : {
      "post" : {
        "summary" : "Create with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/PatientCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "patient response",
            "schema" : {
              "$ref" : "#/definitions/PatientGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "description" : "At least one search parameter must be specified",
        "summary" : "Search for patient",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "patient" ],
        "parameters" : [ {
          "name" : "lastviewed",
          "in" : "query",
          "type" : "string"
        }, {
          "name" : "identifier",
          "in" : "query",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "patient response",
            "schema" : { }
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/user/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "user" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/UserUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "user response",
            "schema" : {
              "$ref" : "#/definitions/UserGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "user" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "user response",
            "schema" : {
              "$ref" : "#/definitions/UserGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "user" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/programenrollment/{uuid}" : {
      "post" : {
        "summary" : "Edit with given uuid, only modifying properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "programenrollment" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid of resource to update",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource properties to update",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/ProgramenrollmentUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "programenrollment response",
            "schema" : {
              "$ref" : "#/definitions/ProgramenrollmentGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "programenrollment" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to filter by",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "200" : {
            "description" : "programenrollment response",
            "schema" : {
              "$ref" : "#/definitions/ProgramenrollmentGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "delete" : {
        "description" : "The resource will be voided/retired unless purge = 'true'",
        "summary" : "Delete or purge resource by uuid",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "programenrollment" ],
        "parameters" : [ {
          "name" : "uuid",
          "in" : "path",
          "description" : "uuid to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "purge",
          "in" : "query",
          "type" : "boolean"
        } ],
        "responses" : {
          "204" : {
            "description" : "Delete successful"
          },
          "404" : {
            "description" : "Resource with given uuid doesn't exist"
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    },
    "/cohort/{parent-uuid}/member" : {
      "post" : {
        "summary" : "Create member subresource with properties in request",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "resource to create",
          "in" : "body",
          "required" : true,
          "type" : "string",
          "schema" : {
            "$ref" : "#/definitions/CohortMemberCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "member response",
            "schema" : {
              "$ref" : "#/definitions/CohortMemberGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      },
      "get" : {
        "summary" : "Fetch all non-retired member subresources",
        "produces" : [ "application/json", "application/xml" ],
        "tags" : [ "cohort" ],
        "parameters" : [ {
          "name" : "parent-uuid",
          "in" : "path",
          "description" : "parent resource uuid",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "member response",
            "schema" : {
              "$ref" : "#/definitions/CohortMemberGet"
            }
          },
          "401" : {
            "description" : "User not logged in"
          }
        },
        "isSearchHandler" : "false"
      }
    }
  },
  "securityDefinitions" : {
    "type" : "basic",
    "description" : "HTTP basic access authentication using OpenMRS username and password"
  },
  "definitions" : {
    "FieldtypeCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "fieldtype"
      }
    },
    "DhisconnectorDhisdataelementsGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "categoryCombo" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectordhisdataelements"
      }
    },
    "AppointmentschedulingAppointmenttypeUpdate" : {
      "type" : "object",
      "required" : [ "name", "description", "duration" ],
      "properties" : {
        "duration" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "confidential" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmenttype"
      }
    },
    "DhisconnectorMappingsGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "dataSetUID" : {
          "type" : "string"
        },
        "created" : {
          "type" : "string"
        },
        "periodType" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "periodIndicatorReportGUID" : {
          "type" : "string"
        },
        "elements" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectormappings"
      }
    },
    "PrivilegeUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "privilege"
      }
    },
    "PersonAttributeCreate" : {
      "type" : "object",
      "required" : [ "attributeType" ],
      "properties" : {
        "hydratedObject" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personattribute"
      }
    },
    "PersonimageGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : { },
      "xml" : {
        "name" : "personimage"
      }
    },
    "EncountertypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encountertype"
      }
    },
    "ExtensionGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "extension"
      }
    },
    "LocationtagUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "retireReason" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "locationtag"
      }
    },
    "AllergyCreate" : {
      "type" : "object",
      "required" : [ "person", "startDate", "allergyType", "allergen" ],
      "properties" : {
        "reaction" : {
          "type" : "string"
        },
        "startDate" : {
          "type" : "string"
        },
        "allergen" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "stopObs" : {
          "type" : "string"
        },
        "startObs" : {
          "type" : "string"
        },
        "allergyType" : {
          "type" : "string"
        },
        "severity" : {
          "type" : "string"
        },
        "comments" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "allergy"
      }
    },
    "EncounterUpdate" : {
      "type" : "object",
      "required" : [ "patient", "encounterType" ],
      "properties" : {
        "obs" : {
          "type" : "string"
        },
        "patient" : {
          "type" : "string"
        },
        "form" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "visit" : {
          "type" : "string"
        },
        "orders" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "encounterProviders" : {
          "type" : "string"
        },
        "encounterType" : {
          "type" : "string"
        },
        "encounterDatetime" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encounter"
      }
    },
    "FormResourceUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "valueReference" : {
          "type" : "string"
        },
        "dataType" : {
          "type" : "string"
        },
        "form" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "handler" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "formresource"
      }
    },
    "DrugIngredientCreate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "strength" : {
          "type" : "string"
        },
        "ingredient" : {
          "type" : "string"
        },
        "units" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "drugingredient"
      }
    },
    "VisitattributetypeUpdate" : {
      "type" : "object",
      "required" : [ "name", "datatypeClassname" ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visitattributetype"
      }
    },
    "OrdertypeUpdate" : {
      "type" : "object",
      "required" : [ "name", "javaClassName" ],
      "properties" : {
        "conceptClasses" : {
          "type" : "string"
        },
        "javaClassName" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "parent" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "ordertype"
      }
    },
    "RelationshiptypeCreate" : {
      "type" : "object",
      "required" : [ "aIsToB", "bIsToA" ],
      "properties" : {
        "weight" : {
          "type" : "string"
        },
        "aIsToB" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "bIsToA" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "relationshiptype"
      }
    },
    "PatientCreate" : {
      "type" : "object",
      "required" : [ "person", "identifiers" ],
      "properties" : {
        "person" : {
          "type" : "string"
        },
        "identifiers" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patient"
      }
    },
    "RelationshipUpdate" : {
      "type" : "object",
      "required" : [ "relationshipType" ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "relationshipType" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "relationship"
      }
    },
    "VisittypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visittype"
      }
    },
    "ConceptdatatypeCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptdatatype"
      }
    },
    "PersonNameCreate" : {
      "type" : "object",
      "required" : [ "givenName", "familyName" ],
      "properties" : {
        "middleName" : {
          "type" : "string"
        },
        "familyName2" : {
          "type" : "string"
        },
        "degree" : {
          "type" : "string"
        },
        "familyNameSuffix" : {
          "type" : "string"
        },
        "prefix" : {
          "type" : "string"
        },
        "familyName" : {
          "type" : "string"
        },
        "givenName" : {
          "type" : "string"
        },
        "preferred" : {
          "type" : "string"
        },
        "familyNamePrefix" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personname"
      }
    },
    "SystemsettingUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "systemsetting"
      }
    },
    "EncounterroleUpdate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encounterrole"
      }
    },
    "PatientIdentifierGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "location" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "preferred" : {
          "type" : "string"
        },
        "identifierType" : {
          "type" : "string"
        },
        "identifier" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patientidentifier"
      }
    },
    "ConceptsourceUpdate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "hl7Code" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptsource"
      }
    },
    "ProviderattributetypeCreate" : {
      "type" : "object",
      "required" : [ "name", "datatypeClassname" ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "providerattributetype"
      }
    },
    "AppointmentschedulingAppointmentallowingoverbookCreate" : {
      "type" : "object",
      "required" : [ "timeSlot", "patient", "status", "appointmentType" ],
      "properties" : {
        "patient" : {
          "type" : "string"
        },
        "reason" : {
          "type" : "string"
        },
        "status" : {
          "type" : "string"
        },
        "visit" : {
          "type" : "string"
        },
        "appointmentType" : {
          "type" : "string"
        },
        "cancelReason" : {
          "type" : "string"
        },
        "timeSlot" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmentallowingoverbook"
      }
    },
    "ProgramenrollmentStateGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "patientProgram" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "state" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "programenrollmentstate"
      }
    },
    "ProviderAttributeUpdate" : {
      "type" : "object",
      "required" : [ "attributeType", "value" ],
      "properties" : {
        "value" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "providerattribute"
      }
    },
    "ConceptDescriptionUpdate" : {
      "type" : "object",
      "required" : [ "description", "locale" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "locale" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptdescription"
      }
    },
    "PersonNameGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "middleName" : {
          "type" : "string"
        },
        "familyName2" : {
          "type" : "string"
        },
        "degree" : {
          "type" : "string"
        },
        "familyNameSuffix" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "prefix" : {
          "type" : "string"
        },
        "familyName" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "givenName" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "preferred" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "familyNamePrefix" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personname"
      }
    },
    "PersonAddressGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "countyDistrict" : {
          "type" : "string"
        },
        "address1" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "address2" : {
          "type" : "string"
        },
        "address3" : {
          "type" : "string"
        },
        "preferred" : {
          "type" : "string"
        },
        "country" : {
          "type" : "string"
        },
        "address6" : {
          "type" : "string"
        },
        "address5" : {
          "type" : "string"
        },
        "address4" : {
          "type" : "string"
        },
        "postalCode" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "cityVillage" : {
          "type" : "string"
        },
        "stateProvince" : {
          "type" : "string"
        },
        "longitude" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "latitude" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personaddress"
      }
    },
    "ObsUpdate" : {
      "type" : "object",
      "required" : [ "person", "obsDatetime", "concept" ],
      "properties" : {
        "formFieldPath" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "order" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "obsDatetime" : {
          "type" : "string"
        },
        "formFieldNamespace" : {
          "type" : "string"
        },
        "groupMembers" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "accessionNumber" : {
          "type" : "string"
        },
        "encounter" : {
          "type" : "string"
        },
        "comment" : {
          "type" : "string"
        },
        "valueModifier" : {
          "type" : "string"
        },
        "valueCodedName" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "obs"
      }
    },
    "ReportingrestReportDefinitionCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestreportdefinition"
      }
    },
    "VisitattributetypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visitattributetype"
      }
    },
    "LocationGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "tags" : {
          "type" : "string"
        },
        "countyDistrict" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "address1" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "address2" : {
          "type" : "string"
        },
        "parentLocation" : {
          "type" : "string"
        },
        "address3" : {
          "type" : "string"
        },
        "country" : {
          "type" : "string"
        },
        "address6" : {
          "type" : "string"
        },
        "address5" : {
          "type" : "string"
        },
        "address4" : {
          "type" : "string"
        },
        "postalCode" : {
          "type" : "string"
        },
        "childLocations" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "cityVillage" : {
          "type" : "string"
        },
        "stateProvince" : {
          "type" : "string"
        },
        "longitude" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "latitude" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "location"
      }
    },
    "EncounterCreate" : {
      "type" : "object",
      "required" : [ "patient", "encounterType" ],
      "properties" : {
        "obs" : {
          "type" : "string"
        },
        "patient" : {
          "type" : "string"
        },
        "form" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "visit" : {
          "type" : "string"
        },
        "orders" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "encounterProviders" : {
          "type" : "string"
        },
        "encounterType" : {
          "type" : "string"
        },
        "encounterDatetime" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encounter"
      }
    },
    "ReportingrestDataSetDefinitionGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "class" : {
          "type" : "string"
        },
        "parameters" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestdatasetdefinition"
      }
    },
    "ConceptreferencetermmapCreate" : {
      "type" : "object",
      "required" : [ "termA", "termB", "conceptMapType" ],
      "properties" : {
        "conceptMapType" : {
          "type" : "string"
        },
        "termA" : {
          "type" : "string"
        },
        "termB" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptreferencetermmap"
      }
    },
    "ConceptreferencetermUpdate" : {
      "type" : "object",
      "required" : [ "code", "conceptSource" ],
      "properties" : {
        "conceptSource" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "code" : {
          "type" : "string"
        },
        "version" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptreferenceterm"
      }
    },
    "PatientidentifiertypeCreate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "uniquenessBehavior" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "validator" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "locationBehavior" : {
          "type" : "string"
        },
        "checkDigit" : {
          "type" : "string"
        },
        "formatDescription" : {
          "type" : "string"
        },
        "format" : {
          "type" : "string"
        },
        "required" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patientidentifiertype"
      }
    },
    "PersonattributetypeUpdate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "editPrivilege" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "sortWeight" : {
          "type" : "string"
        },
        "format" : {
          "type" : "string"
        },
        "searchable" : {
          "type" : "string"
        },
        "foreignKey" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personattributetype"
      }
    },
    "ReportingrestDataSetDefinitionUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestdatasetdefinition"
      }
    },
    "UserGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "userProperties" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "privileges" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "username" : {
          "type" : "string"
        },
        "secretQuestion" : {
          "type" : "string"
        },
        "proficientLocales" : {
          "type" : "string"
        },
        "roles" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "systemId" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "allRoles" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "user"
      }
    },
    "ObsGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "formFieldPath" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "obsDatetime" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "formFieldNamespace" : {
          "type" : "string"
        },
        "groupMembers" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "encounter" : {
          "type" : "string"
        },
        "order" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "accessionNumber" : {
          "type" : "string"
        },
        "obsGroup" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "comment" : {
          "type" : "string"
        },
        "valueModifier" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "valueCodedName" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "obs"
      }
    },
    "VisitAttributeUpdate" : {
      "type" : "object",
      "required" : [ "attributeType", "value" ],
      "properties" : {
        "value" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visitattribute"
      }
    },
    "CohortMemberUpdate" : {
      "type" : "object",
      "required" : [ "patient" ],
      "properties" : {
        "patient" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "cohortmember"
      }
    },
    "DhisconnectorDhiscategorycombosGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "categories" : {
          "type" : "string"
        },
        "categoryOptionCombos" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectordhiscategorycombos"
      }
    },
    "PersonAddressUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "countyDistrict" : {
          "type" : "string"
        },
        "address1" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "address2" : {
          "type" : "string"
        },
        "address3" : {
          "type" : "string"
        },
        "preferred" : {
          "type" : "string"
        },
        "country" : {
          "type" : "string"
        },
        "address6" : {
          "type" : "string"
        },
        "address5" : {
          "type" : "string"
        },
        "postalCode" : {
          "type" : "string"
        },
        "address4" : {
          "type" : "string"
        },
        "cityVillage" : {
          "type" : "string"
        },
        "stateProvince" : {
          "type" : "string"
        },
        "longitude" : {
          "type" : "string"
        },
        "latitude" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personaddress"
      }
    },
    "ConceptreferencetermCreate" : {
      "type" : "object",
      "required" : [ "code", "conceptSource" ],
      "properties" : {
        "conceptSource" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "code" : {
          "type" : "string"
        },
        "version" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptreferenceterm"
      }
    },
    "ProviderGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "person" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "identifier" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "provider"
      }
    },
    "PatientGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "person" : {
          "type" : "string"
        },
        "identifiers" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patient"
      }
    },
    "DhisconnectorDhisdatavaluesetsUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "dataValues" : {
          "type" : "string"
        },
        "orgUnit" : {
          "type" : "string"
        },
        "period" : {
          "type" : "string"
        },
        "dataSet" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectordhisdatavaluesets"
      }
    },
    "ReportingrestDataSetDefinitionCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestdatasetdefinition"
      }
    },
    "FieldUpdate" : {
      "type" : "object",
      "required" : [ "name", "fieldType", "selectMultiple" ],
      "properties" : {
        "attributeName" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "selectMultiple" : {
          "type" : "string"
        },
        "tableName" : {
          "type" : "string"
        },
        "fieldType" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "defaultValue" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "field"
      }
    },
    "DrugCreate" : {
      "type" : "object",
      "required" : [ "combination", "concept" ],
      "properties" : {
        "ingredients" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "maximumDailyDose" : {
          "type" : "string"
        },
        "route" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "combination" : {
          "type" : "string"
        },
        "doseStrength" : {
          "type" : "string"
        },
        "dosageForm" : {
          "type" : "string"
        },
        "units" : {
          "type" : "string"
        },
        "minimumDailyDose" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "drug"
      }
    },
    "ProgramCreate" : {
      "type" : "object",
      "required" : [ "name", "description", "concept" ],
      "properties" : {
        "outcomesConcept" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "program"
      }
    },
    "AppointmentschedulingAppointmentrequestGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "status" : {
          "type" : "string"
        },
        "minTimeFrameValue" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "requestedOn" : {
          "type" : "string"
        },
        "minTimeFrameUnits" : {
          "type" : "string"
        },
        "patient" : {
          "type" : "string"
        },
        "maxTimeFrameUnits" : {
          "type" : "string"
        },
        "maxTimeFrameValue" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "notes" : {
          "type" : "string"
        },
        "appointmentType" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "requestedBy" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmentrequest"
      }
    },
    "SystemsettingGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "property" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "systemsetting"
      }
    },
    "ConceptsourceGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "hl7Code" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptsource"
      }
    },
    "OrdertypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "conceptClasses" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "javaClassName" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "parent" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "ordertype"
      }
    },
    "FormFormfieldGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "field" : {
          "type" : "string"
        },
        "fieldNumber" : {
          "type" : "string"
        },
        "form" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "sortWeight" : {
          "type" : "string"
        },
        "pageNumber" : {
          "type" : "string"
        },
        "parent" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "required" : {
          "type" : "string"
        },
        "fieldPart" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "formformfield"
      }
    },
    "VisittypeUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visittype"
      }
    },
    "AllergyUpdate" : {
      "type" : "object",
      "required" : [ "person", "startDate", "allergyType", "allergen" ],
      "properties" : {
        "reaction" : {
          "type" : "string"
        },
        "startDate" : {
          "type" : "string"
        },
        "allergen" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "stopObs" : {
          "type" : "string"
        },
        "startObs" : {
          "type" : "string"
        },
        "allergyType" : {
          "type" : "string"
        },
        "severity" : {
          "type" : "string"
        },
        "comments" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "allergy"
      }
    },
    "ReportingrestCohortGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "definition" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "members" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestcohort"
      }
    },
    "ProblemGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "startObs" : {
          "type" : "string"
        },
        "stopObs" : {
          "type" : "string"
        },
        "sortWeight" : {
          "type" : "string"
        },
        "problem" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "modifier" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "activeListType" : {
          "type" : "string"
        },
        "comments" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "problem"
      }
    },
    "ObsCreate" : {
      "type" : "object",
      "required" : [ "person", "obsDatetime", "concept" ],
      "properties" : {
        "formFieldPath" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "order" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "obsDatetime" : {
          "type" : "string"
        },
        "formFieldNamespace" : {
          "type" : "string"
        },
        "groupMembers" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "accessionNumber" : {
          "type" : "string"
        },
        "encounter" : {
          "type" : "string"
        },
        "comment" : {
          "type" : "string"
        },
        "valueModifier" : {
          "type" : "string"
        },
        "valueCodedName" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "obs"
      }
    },
    "PersonattributetypeCreate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "editPrivilege" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "sortWeight" : {
          "type" : "string"
        },
        "format" : {
          "type" : "string"
        },
        "searchable" : {
          "type" : "string"
        },
        "foreignKey" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personattributetype"
      }
    },
    "VisitGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "patient" : {
          "type" : "string"
        },
        "stopDatetime" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "indication" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "encounters" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "startDatetime" : {
          "type" : "string"
        },
        "visitType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visit"
      }
    },
    "CohortMemberCreate" : {
      "type" : "object",
      "required" : [ "patient" ],
      "properties" : {
        "patient" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "cohortmember"
      }
    },
    "DhisconnectorPeriodindicatorreportsGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "schema" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectorperiodindicatorreports"
      }
    },
    "ReportingrestReportdataGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "definition" : {
          "type" : "string"
        },
        "context" : {
          "type" : "string"
        },
        "dataSets" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestreportdata"
      }
    },
    "LocationAttributeCreate" : {
      "type" : "object",
      "required" : [ "attributeType", "value" ],
      "properties" : {
        "value" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "locationattribute"
      }
    },
    "ConceptNameUpdate" : {
      "type" : "object",
      "required" : [ "name", "locale" ],
      "properties" : {
        "conceptNameType" : {
          "type" : "string"
        },
        "locale" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "localePreferred" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptname"
      }
    },
    "ConceptclassUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptclass"
      }
    },
    "ProviderAttributeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "voided" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "providerattribute"
      }
    },
    "ProviderattributetypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "providerattributetype"
      }
    },
    "FieldAnswerUpdate" : {
      "type" : "object",
      "required" : [ "field", "concept" ],
      "properties" : {
        "field" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "fieldanswer"
      }
    },
    "ProgramenrollmentCreate" : {
      "type" : "object",
      "required" : [ "patient", "program", "dateEnrolled" ],
      "properties" : {
        "patient" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "program" : {
          "type" : "string"
        },
        "states" : {
          "type" : "string"
        },
        "dateEnrolled" : {
          "type" : "string"
        },
        "outcome" : {
          "type" : "string"
        },
        "dateCompleted" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "programenrollment"
      }
    },
    "ProviderCreate" : {
      "type" : "object",
      "required" : [ "person", "identifier" ],
      "properties" : {
        "person" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "identifier" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "provider"
      }
    },
    "AppointmentschedulingAppointmentrequestUpdate" : {
      "type" : "object",
      "required" : [ "patient", "appointmentType", "requestedOn", "status" ],
      "properties" : {
        "maxTimeFrameUnits" : {
          "type" : "string"
        },
        "patient" : {
          "type" : "string"
        },
        "maxTimeFrameValue" : {
          "type" : "string"
        },
        "minTimeFrameValue" : {
          "type" : "string"
        },
        "status" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "notes" : {
          "type" : "string"
        },
        "requestedOn" : {
          "type" : "string"
        },
        "appointmentType" : {
          "type" : "string"
        },
        "minTimeFrameUnits" : {
          "type" : "string"
        },
        "requestedBy" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmentrequest"
      }
    },
    "ReportingrestCohortDefinitionUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestcohortdefinition"
      }
    },
    "OrderCreate" : {
      "type" : "object",
      "required" : [ "encounter", "type" ],
      "properties" : {
        "durationUnits" : {
          "type" : "string"
        },
        "complex" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "orderReasonNonCoded" : {
          "type" : "string"
        },
        "instructions" : {
          "type" : "string"
        },
        "autoExpireDate" : {
          "type" : "string"
        },
        "frequency" : {
          "type" : "string"
        },
        "encounter" : {
          "type" : "string"
        },
        "commentToFulfiller" : {
          "type" : "string"
        },
        "doseUnits" : {
          "type" : "string"
        },
        "careSetting" : {
          "type" : "string"
        },
        "type" : {
          "type" : "string",
          "enum" : [ "drugorder", "testorder" ]
        },
        "brandName" : {
          "type" : "string"
        },
        "dose" : {
          "type" : "string"
        },
        "urgency" : {
          "type" : "string"
        },
        "dateStopped" : {
          "type" : "string"
        },
        "patient" : {
          "type" : "string"
        },
        "dateActivated" : {
          "type" : "string"
        },
        "previousOrder" : {
          "type" : "string"
        },
        "action" : {
          "type" : "string"
        },
        "laterality" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "string"
        },
        "drug" : {
          "type" : "string"
        },
        "orderReason" : {
          "type" : "string"
        },
        "orderer" : {
          "type" : "string"
        },
        "dispenseAsWritten" : {
          "type" : "string"
        },
        "asNeededCondition" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "dosingInstructions" : {
          "type" : "string"
        },
        "asNeeded" : {
          "type" : "string"
        },
        "specimenSource" : {
          "type" : "string"
        },
        "units" : {
          "type" : "string"
        },
        "duration" : {
          "type" : "string"
        },
        "dosingType" : {
          "type" : "string"
        },
        "route" : {
          "type" : "string"
        },
        "numRefills" : {
          "type" : "string"
        },
        "quantityUnits" : {
          "type" : "string"
        },
        "orderNumber" : {
          "type" : "string"
        },
        "prn" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "numberOfRepeats" : {
          "type" : "string"
        },
        "clinicalHistory" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "order"
      }
    },
    "RelationshipGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "relationshipType" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "personA" : {
          "type" : "string"
        },
        "personB" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "relationship"
      }
    },
    "EncounterEncounterproviderCreate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "encounterRole" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "encounter" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encounterencounterprovider"
      }
    },
    "PersonattributetypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "concept" : {
          "type" : "string"
        },
        "editPrivilege" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "sortWeight" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "format" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "searchable" : {
          "type" : "string"
        },
        "foreignKey" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personattributetype"
      }
    },
    "LocationattributetypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "locationattributetype"
      }
    },
    "ConceptsourceCreate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "hl7Code" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptsource"
      }
    },
    "ReportingrestReportDefinitionUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestreportdefinition"
      }
    },
    "ReportingrestCohortDefinitionCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestcohortdefinition"
      }
    },
    "EncounterEncounterproviderGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "encounterRole" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encounterencounterprovider"
      }
    },
    "ConceptDescriptionCreate" : {
      "type" : "object",
      "required" : [ "description", "locale" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "locale" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptdescription"
      }
    },
    "VisitAttributeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "voided" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visitattribute"
      }
    },
    "AppointmentschedulingTimeslotCreate" : {
      "type" : "object",
      "required" : [ "startDate", "endDate", "appointmentBlock" ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "appointmentBlock" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingtimeslot"
      }
    },
    "RoleGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "allInheritedRoles" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "privileges" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "inheritedRoles" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "role"
      }
    },
    "ProviderUpdate" : {
      "type" : "object",
      "required" : [ "person", "identifier" ],
      "properties" : {
        "person" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "identifier" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "provider"
      }
    },
    "RelationshiptypeUpdate" : {
      "type" : "object",
      "required" : [ "aIsToB", "bIsToA" ],
      "properties" : {
        "weight" : {
          "type" : "string"
        },
        "aIsToB" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "bIsToA" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "relationshiptype"
      }
    },
    "LocationCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "tags" : {
          "type" : "string"
        },
        "countyDistrict" : {
          "type" : "string"
        },
        "address1" : {
          "type" : "string"
        },
        "address2" : {
          "type" : "string"
        },
        "parentLocation" : {
          "type" : "string"
        },
        "address3" : {
          "type" : "string"
        },
        "country" : {
          "type" : "string"
        },
        "address6" : {
          "type" : "string"
        },
        "address5" : {
          "type" : "string"
        },
        "address4" : {
          "type" : "string"
        },
        "postalCode" : {
          "type" : "string"
        },
        "childLocations" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "cityVillage" : {
          "type" : "string"
        },
        "stateProvince" : {
          "type" : "string"
        },
        "longitude" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "latitude" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "location"
      }
    },
    "ReportingrestDataSetGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "definition" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "rows" : {
          "type" : "string"
        },
        "metadata" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestdataset"
      }
    },
    "PatientUpdate" : {
      "type" : "object",
      "required" : [ "person" ],
      "properties" : {
        "person" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patient"
      }
    },
    "WorkflowUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "workflow"
      }
    },
    "ConceptdatatypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "hl7Abbreviation" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptdatatype"
      }
    },
    "ProviderattributetypeUpdate" : {
      "type" : "object",
      "required" : [ "name", "datatypeClassname" ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "providerattributetype"
      }
    },
    "Hl7sourceCreate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "hl7source"
      }
    },
    "OrderfrequencyGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "concept" : {
          "type" : "string"
        },
        "frequencyPerDay" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "orderfrequency"
      }
    },
    "CohortUpdate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "cohort"
      }
    },
    "EncountertypeCreate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encountertype"
      }
    },
    "ConceptreferencetermmapGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "conceptMapType" : {
          "type" : "string"
        },
        "termA" : {
          "type" : "string"
        },
        "termB" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptreferencetermmap"
      }
    },
    "ConceptmaptypeCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "isHidden" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptmaptype"
      }
    },
    "CohortGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "memberIds" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "cohort"
      }
    },
    "ProviderAttributeCreate" : {
      "type" : "object",
      "required" : [ "attributeType", "value" ],
      "properties" : {
        "value" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "providerattribute"
      }
    },
    "RelationshiptypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "weight" : {
          "type" : "string"
        },
        "aIsToB" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "bIsToA" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "relationshiptype"
      }
    },
    "FormResourceCreate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "valueReference" : {
          "type" : "string"
        },
        "dataType" : {
          "type" : "string"
        },
        "form" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "handler" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "formresource"
      }
    },
    "PersonCreate" : {
      "type" : "object",
      "required" : [ "names", "gender" ],
      "properties" : {
        "birthdateEstimated" : {
          "type" : "string"
        },
        "names" : {
          "type" : "string"
        },
        "age" : {
          "type" : "string"
        },
        "birthdate" : {
          "type" : "string"
        },
        "deathdateEstimated" : {
          "type" : "string"
        },
        "causeOfDeath" : {
          "type" : "string"
        },
        "gender" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "addresses" : {
          "type" : "string"
        },
        "dead" : {
          "type" : "string"
        },
        "deathDate" : {
          "type" : "string"
        },
        "birthtime" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "person"
      }
    },
    "ApptemplateGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "apptemplate"
      }
    },
    "DhisconnectorDhisdatasetsGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "categoryCombo" : {
          "type" : "string"
        },
        "dataElements" : {
          "type" : "string"
        },
        "periodType" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "code" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectordhisdatasets"
      }
    },
    "CohortCreate" : {
      "type" : "object",
      "required" : [ "name", "description", "memberIds" ],
      "properties" : {
        "memberIds" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "cohort"
      }
    },
    "DrugIngredientUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "strength" : {
          "type" : "string"
        },
        "ingredient" : {
          "type" : "string"
        },
        "units" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "drugingredient"
      }
    },
    "ConceptMappingUpdate" : {
      "type" : "object",
      "required" : [ "conceptReferenceTerm", "conceptMapType" ],
      "properties" : {
        "conceptMapType" : {
          "type" : "string"
        },
        "conceptReferenceTerm" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptmapping"
      }
    },
    "FieldAnswerGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "field" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "fieldanswer"
      }
    },
    "ProgramenrollmentStateCreate" : {
      "type" : "object",
      "required" : [ "state" ],
      "properties" : {
        "state" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "programenrollmentstate"
      }
    },
    "PatientidentifiertypeUpdate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "uniquenessBehavior" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "validator" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "locationBehavior" : {
          "type" : "string"
        },
        "checkDigit" : {
          "type" : "string"
        },
        "formatDescription" : {
          "type" : "string"
        },
        "format" : {
          "type" : "string"
        },
        "required" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patientidentifiertype"
      }
    },
    "EncounterGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "obs" : {
          "type" : "string"
        },
        "patient" : {
          "type" : "string"
        },
        "form" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "visit" : {
          "type" : "string"
        },
        "orders" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "encounterProviders" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "encounterType" : {
          "type" : "string"
        },
        "encounterDatetime" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encounter"
      }
    },
    "ProgramGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "outcomesConcept" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "allWorkflows" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "program"
      }
    },
    "ProblemUpdate" : {
      "type" : "object",
      "required" : [ "person", "startDate", "problem" ],
      "properties" : {
        "modifier" : {
          "type" : "string"
        },
        "startDate" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "stopObs" : {
          "type" : "string"
        },
        "startObs" : {
          "type" : "string"
        },
        "sortWeight" : {
          "type" : "string"
        },
        "problem" : {
          "type" : "string"
        },
        "comments" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "problem"
      }
    },
    "FormFormfieldUpdate" : {
      "type" : "object",
      "required" : [ "form", "field", "required" ],
      "properties" : {
        "field" : {
          "type" : "string"
        },
        "fieldNumber" : {
          "type" : "string"
        },
        "form" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "sortWeight" : {
          "type" : "string"
        },
        "pageNumber" : {
          "type" : "string"
        },
        "parent" : {
          "type" : "string"
        },
        "fieldPart" : {
          "type" : "string"
        },
        "required" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "formformfield"
      }
    },
    "EncounterEncounterproviderUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "encounterRole" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "voidReason" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encounterencounterprovider"
      }
    },
    "EncounterroleGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encounterrole"
      }
    },
    "ConceptclassCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptclass"
      }
    },
    "WorkflowCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "workflow"
      }
    },
    "DrugIngredientGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "strength" : {
          "type" : "string"
        },
        "ingredient" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "units" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "drugingredient"
      }
    },
    "RoleUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "privileges" : {
          "type" : "string"
        },
        "inheritedRoles" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "role"
      }
    },
    "PrivilegeCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "privilege"
      }
    },
    "FormCreate" : {
      "type" : "object",
      "required" : [ "name", "version" ],
      "properties" : {
        "template" : {
          "type" : "string"
        },
        "formFields" : {
          "type" : "string"
        },
        "xslt" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "published" : {
          "type" : "string"
        },
        "build" : {
          "type" : "string"
        },
        "encounterType" : {
          "type" : "string"
        },
        "version" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "form"
      }
    },
    "LocationAttributeUpdate" : {
      "type" : "object",
      "required" : [ "attributeType", "value" ],
      "properties" : {
        "value" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "locationattribute"
      }
    },
    "ConceptCreate" : {
      "type" : "object",
      "required" : [ "names", "datatype", "conceptClass" ],
      "properties" : {
        "conceptClass" : {
          "type" : "string"
        },
        "set" : {
          "type" : "string"
        },
        "names" : {
          "type" : "string"
        },
        "mappings" : {
          "type" : "string"
        },
        "answers" : {
          "type" : "string"
        },
        "datatype" : {
          "type" : "string"
        },
        "descriptions" : {
          "type" : "string"
        },
        "setMembers" : {
          "type" : "string"
        },
        "version" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "concept"
      }
    },
    "PatientidentifiertypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "uniquenessBehavior" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "validator" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "locationBehavior" : {
          "type" : "string"
        },
        "checkDigit" : {
          "type" : "string"
        },
        "formatDescription" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "format" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "required" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patientidentifiertype"
      }
    },
    "ProgramenrollmentUpdate" : {
      "type" : "object",
      "required" : [ "dateEnrolled" ],
      "properties" : {
        "location" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "states" : {
          "type" : "string"
        },
        "dateEnrolled" : {
          "type" : "string"
        },
        "outcome" : {
          "type" : "string"
        },
        "dateCompleted" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "programenrollment"
      }
    },
    "WorkflowGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "concept" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "states" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "workflow"
      }
    },
    "PatientprofileCreate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "patient" : {
          "type" : "string"
        },
        "image" : {
          "type" : "string"
        },
        "relationships" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patientprofile"
      }
    },
    "ConceptDescriptionGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "locale" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptdescription"
      }
    },
    "AppointmentschedulingAppointmentblockCreate" : {
      "type" : "object",
      "required" : [ "startDate", "endDate", "location", "types" ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "types" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmentblock"
      }
    },
    "AppointmentschedulingTimeslotGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "countOfAppointments" : {
          "type" : "string"
        },
        "unallocatedMinutes" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "appointmentBlock" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingtimeslot"
      }
    },
    "ConceptreferencetermmapUpdate" : {
      "type" : "object",
      "required" : [ "termA", "termB", "conceptMapType" ],
      "properties" : {
        "conceptMapType" : {
          "type" : "string"
        },
        "termA" : {
          "type" : "string"
        },
        "termB" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptreferencetermmap"
      }
    },
    "PersonGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "birthdateEstimated" : {
          "type" : "string"
        },
        "preferredName" : {
          "type" : "string"
        },
        "deathdateEstimated" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "deathDate" : {
          "type" : "string"
        },
        "preferredAddress" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "names" : {
          "type" : "string"
        },
        "age" : {
          "type" : "string"
        },
        "birthdate" : {
          "type" : "string"
        },
        "gender" : {
          "type" : "string"
        },
        "causeOfDeath" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "addresses" : {
          "type" : "string"
        },
        "dead" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "birthtime" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "person"
      }
    },
    "DrugGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "concept" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "doseStrength" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "units" : {
          "type" : "string"
        },
        "ingredients" : {
          "type" : "string"
        },
        "maximumDailyDose" : {
          "type" : "string"
        },
        "route" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "combination" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "dosageForm" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "minimumDailyDose" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "drug"
      }
    },
    "DhisconnectorDhisdatavaluesetsCreate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "dataValues" : {
          "type" : "string"
        },
        "orgUnit" : {
          "type" : "string"
        },
        "period" : {
          "type" : "string"
        },
        "dataSet" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectordhisdatavaluesets"
      }
    },
    "CaresettingGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "careSettingType" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "caresetting"
      }
    },
    "FieldGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "attributeName" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "selectMultiple" : {
          "type" : "string"
        },
        "tableName" : {
          "type" : "string"
        },
        "fieldType" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "defaultValue" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "field"
      }
    },
    "VisitattributetypeCreate" : {
      "type" : "object",
      "required" : [ "name", "datatypeClassname" ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visitattributetype"
      }
    },
    "AppointmentschedulingAppointmenttypeCreate" : {
      "type" : "object",
      "required" : [ "name", "description", "duration" ],
      "properties" : {
        "duration" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "confidential" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmenttype"
      }
    },
    "ConceptGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "conceptClass" : {
          "type" : "string"
        },
        "set" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "answers" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "descriptions" : {
          "type" : "string"
        },
        "version" : {
          "type" : "string"
        },
        "names" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "mappings" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "datatype" : {
          "type" : "string"
        },
        "setMembers" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "concept"
      }
    },
    "ConceptUpdate" : {
      "type" : "object",
      "required" : [ "datatype", "conceptClass" ],
      "properties" : {
        "conceptClass" : {
          "type" : "string"
        },
        "set" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "mappings" : {
          "type" : "string"
        },
        "answers" : {
          "type" : "string"
        },
        "datatype" : {
          "type" : "string"
        },
        "setMembers" : {
          "type" : "string"
        },
        "version" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "concept"
      }
    },
    "LocationattributetypeCreate" : {
      "type" : "object",
      "required" : [ "name", "datatypeClassname" ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "locationattributetype"
      }
    },
    "OrderGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "orderReason" : {
          "type" : "string"
        },
        "orderer" : {
          "type" : "string"
        },
        "orderReasonNonCoded" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "instructions" : {
          "type" : "string"
        },
        "autoExpireDate" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "commentToFulfiller" : {
          "type" : "string"
        },
        "encounter" : {
          "type" : "string"
        },
        "careSetting" : {
          "type" : "string"
        },
        "urgency" : {
          "type" : "string"
        },
        "dateStopped" : {
          "type" : "string"
        },
        "patient" : {
          "type" : "string"
        },
        "dateActivated" : {
          "type" : "string"
        },
        "orderNumber" : {
          "type" : "string"
        },
        "action" : {
          "type" : "string"
        },
        "previousOrder" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "order"
      }
    },
    "ReportingrestCohortDefinitionGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "class" : {
          "type" : "string"
        },
        "parameters" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestcohortdefinition"
      }
    },
    "ConceptNameGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "conceptNameType" : {
          "type" : "string"
        },
        "locale" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "localePreferred" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptname"
      }
    },
    "CustomdatatypeHandlersGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "handlerClassname" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "customdatatypehandlers"
      }
    },
    "UserCreate" : {
      "type" : "object",
      "required" : [ "username", "password", "person" ],
      "properties" : {
        "userProperties" : {
          "type" : "string"
        },
        "secretQuestion" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "username" : {
          "type" : "string"
        },
        "proficientLocales" : {
          "type" : "string"
        },
        "roles" : {
          "type" : "string"
        },
        "systemId" : {
          "type" : "string"
        },
        "password" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "user"
      }
    },
    "PatientprofileUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "patient" : {
          "type" : "string"
        },
        "image" : {
          "type" : "string"
        },
        "relationships" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patientprofile"
      }
    },
    "AppointmentschedulingAppointmentallowingoverbookUpdate" : {
      "type" : "object",
      "required" : [ "status" ],
      "properties" : {
        "reason" : {
          "type" : "string"
        },
        "status" : {
          "type" : "string"
        },
        "visit" : {
          "type" : "string"
        },
        "cancelReason" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmentallowingoverbook"
      }
    },
    "LocationtagCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "retireReason" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "locationtag"
      }
    },
    "PersonimageCreate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "person" : {
          "type" : "string"
        },
        "base64EncodedImage" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personimage"
      }
    },
    "SystemsettingCreate" : {
      "type" : "object",
      "required" : [ "property" ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "property" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "systemsetting"
      }
    },
    "FieldCreate" : {
      "type" : "object",
      "required" : [ "name", "fieldType", "selectMultiple" ],
      "properties" : {
        "attributeName" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "selectMultiple" : {
          "type" : "string"
        },
        "tableName" : {
          "type" : "string"
        },
        "fieldType" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "defaultValue" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "field"
      }
    },
    "FormUpdate" : {
      "type" : "object",
      "required" : [ "name", "version" ],
      "properties" : {
        "template" : {
          "type" : "string"
        },
        "xslt" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "published" : {
          "type" : "string"
        },
        "build" : {
          "type" : "string"
        },
        "encounterType" : {
          "type" : "string"
        },
        "version" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "form"
      }
    },
    "ConceptclassGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptclass"
      }
    },
    "AllergyGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "reaction" : {
          "type" : "string"
        },
        "startDate" : {
          "type" : "string"
        },
        "allergen" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "startObs" : {
          "type" : "string"
        },
        "stopObs" : {
          "type" : "string"
        },
        "allergyType" : {
          "type" : "string"
        },
        "severity" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "activeListType" : {
          "type" : "string"
        },
        "comments" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "allergy"
      }
    },
    "FormGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "formFields" : {
          "type" : "string"
        },
        "resources" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "published" : {
          "type" : "string"
        },
        "build" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "version" : {
          "type" : "string"
        },
        "encounterType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "form"
      }
    },
    "ConceptmaptypeUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "isHidden" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptmaptype"
      }
    },
    "ProgramUpdate" : {
      "type" : "object",
      "required" : [ "name", "description", "concept" ],
      "properties" : {
        "outcomesConcept" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "program"
      }
    },
    "ProgramenrollmentGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "patient" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "program" : {
          "type" : "string"
        },
        "states" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "dateEnrolled" : {
          "type" : "string"
        },
        "outcome" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "dateCompleted" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "programenrollment"
      }
    },
    "OrdertypeCreate" : {
      "type" : "object",
      "required" : [ "name", "javaClassName" ],
      "properties" : {
        "conceptClasses" : {
          "type" : "string"
        },
        "javaClassName" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "parent" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "ordertype"
      }
    },
    "ConceptMappingGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "conceptMapType" : {
          "type" : "string"
        },
        "conceptReferenceTerm" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptmapping"
      }
    },
    "DrugUpdate" : {
      "type" : "object",
      "required" : [ "combination", "concept" ],
      "properties" : {
        "concept" : {
          "type" : "string"
        },
        "maximumDailyDose" : {
          "type" : "string"
        },
        "route" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "combination" : {
          "type" : "string"
        },
        "doseStrength" : {
          "type" : "string"
        },
        "dosageForm" : {
          "type" : "string"
        },
        "units" : {
          "type" : "string"
        },
        "minimumDailyDose" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "drug"
      }
    },
    "CustomdatatypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "datatypeClassname" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "handlers" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "customdatatype"
      }
    },
    "ConceptMappingCreate" : {
      "type" : "object",
      "required" : [ "conceptReferenceTerm", "conceptMapType" ],
      "properties" : {
        "conceptMapType" : {
          "type" : "string"
        },
        "conceptReferenceTerm" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptmapping"
      }
    },
    "PersonimageUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "person" : {
          "type" : "string"
        },
        "base64EncodedImage" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personimage"
      }
    },
    "VisittypeCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visittype"
      }
    },
    "PersonAddressCreate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "countyDistrict" : {
          "type" : "string"
        },
        "address1" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "address2" : {
          "type" : "string"
        },
        "address3" : {
          "type" : "string"
        },
        "preferred" : {
          "type" : "string"
        },
        "country" : {
          "type" : "string"
        },
        "address6" : {
          "type" : "string"
        },
        "address5" : {
          "type" : "string"
        },
        "postalCode" : {
          "type" : "string"
        },
        "address4" : {
          "type" : "string"
        },
        "cityVillage" : {
          "type" : "string"
        },
        "stateProvince" : {
          "type" : "string"
        },
        "longitude" : {
          "type" : "string"
        },
        "latitude" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personaddress"
      }
    },
    "FieldtypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "isSet" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "fieldtype"
      }
    },
    "AppointmentschedulingAppointmenttypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "duration" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "confidential" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmenttype"
      }
    },
    "AppointmentschedulingTimeslotUpdate" : {
      "type" : "object",
      "required" : [ "startDate", "endDate", "appointmentBlock" ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "appointmentBlock" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingtimeslot"
      }
    },
    "ProgramenrollmentStateUpdate" : {
      "type" : "object",
      "required" : [ "state" ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "state" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "programenrollmentstate"
      }
    },
    "EncounterroleCreate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encounterrole"
      }
    },
    "AppointmentschedulingAppointmentallowingoverbookGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "patient" : {
          "type" : "string"
        },
        "reason" : {
          "type" : "string"
        },
        "status" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "visit" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "appointmentType" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "cancelReason" : {
          "type" : "string"
        },
        "timeSlot" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmentallowingoverbook"
      }
    },
    "PatientIdentifierUpdate" : {
      "type" : "object",
      "required" : [ "identifier", "identifierType" ],
      "properties" : {
        "location" : {
          "type" : "string"
        },
        "preferred" : {
          "type" : "string"
        },
        "identifierType" : {
          "type" : "string"
        },
        "identifier" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patientidentifier"
      }
    },
    "AppointmentschedulingAppointmentblockUpdate" : {
      "type" : "object",
      "required" : [ "startDate", "endDate", "location", "types" ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "types" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmentblock"
      }
    },
    "ConceptreferencetermGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "conceptSource" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "code" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        },
        "version" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptreferenceterm"
      }
    },
    "AppointmentschedulingAppointmentrequestCreate" : {
      "type" : "object",
      "required" : [ "patient", "appointmentType", "requestedOn", "status" ],
      "properties" : {
        "maxTimeFrameUnits" : {
          "type" : "string"
        },
        "patient" : {
          "type" : "string"
        },
        "maxTimeFrameValue" : {
          "type" : "string"
        },
        "minTimeFrameValue" : {
          "type" : "string"
        },
        "status" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "notes" : {
          "type" : "string"
        },
        "requestedOn" : {
          "type" : "string"
        },
        "appointmentType" : {
          "type" : "string"
        },
        "minTimeFrameUnits" : {
          "type" : "string"
        },
        "requestedBy" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmentrequest"
      }
    },
    "DhisconnectorMappingsCreate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "dataSetUID" : {
          "type" : "string"
        },
        "created" : {
          "type" : "string"
        },
        "periodType" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "periodIndicatorReportGUID" : {
          "type" : "string"
        },
        "elements" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectormappings"
      }
    },
    "VisitCreate" : {
      "type" : "object",
      "required" : [ "patient", "visitType" ],
      "properties" : {
        "patient" : {
          "type" : "string"
        },
        "stopDatetime" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "indication" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "encounters" : {
          "type" : "string"
        },
        "startDatetime" : {
          "type" : "string"
        },
        "visitType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visit"
      }
    },
    "FieldtypeUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "fieldtype"
      }
    },
    "PersonUpdate" : {
      "type" : "object",
      "required" : [ "names", "causeOfDeath", "dead" ],
      "properties" : {
        "birthdateEstimated" : {
          "type" : "string"
        },
        "preferredName" : {
          "type" : "string"
        },
        "deathdateEstimated" : {
          "type" : "string"
        },
        "preferredAddress" : {
          "type" : "string"
        },
        "deathDate" : {
          "type" : "string"
        },
        "names" : {
          "type" : "string"
        },
        "age" : {
          "type" : "string"
        },
        "birthdate" : {
          "type" : "string"
        },
        "gender" : {
          "type" : "string"
        },
        "causeOfDeath" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "addresses" : {
          "type" : "string"
        },
        "dead" : {
          "type" : "string"
        },
        "birthtime" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "person"
      }
    },
    "LocationAttributeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "voided" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "locationattribute"
      }
    },
    "DhisconnectorMappingsUpdate" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "dataSetUID" : {
          "type" : "string"
        },
        "created" : {
          "type" : "string"
        },
        "periodType" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "periodIndicatorReportGUID" : {
          "type" : "string"
        },
        "elements" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectormappings"
      }
    },
    "LocationattributetypeUpdate" : {
      "type" : "object",
      "required" : [ "name", "datatypeClassname" ],
      "properties" : {
        "datatypeConfig" : {
          "type" : "string"
        },
        "datatypeClassname" : {
          "type" : "string"
        },
        "handlerConfig" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "preferredHandlerClassname" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "locationattributetype"
      }
    },
    "Hl7Create" : {
      "type" : "object",
      "required" : [ "hl7" ],
      "properties" : {
        "hl7" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "hl7"
      }
    },
    "AppGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "app"
      }
    },
    "ConceptmaptypeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "isHidden" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptmaptype"
      }
    },
    "ConceptNameCreate" : {
      "type" : "object",
      "required" : [ "name", "locale" ],
      "properties" : {
        "conceptNameType" : {
          "type" : "string"
        },
        "locale" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "localePreferred" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "conceptname"
      }
    },
    "DhisconnectorDhisdatavaluesetsGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "dataValues" : {
          "type" : "string"
        },
        "orgUnit" : {
          "type" : "string"
        },
        "period" : {
          "type" : "string"
        },
        "dataSet" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectordhisdatavaluesets"
      }
    },
    "ReportingrestReportRequestGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "renderCompleteDatetime" : {
          "type" : "string"
        },
        "status" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "priority" : {
          "type" : "string"
        },
        "renderingMode" : {
          "type" : "string"
        },
        "requestDate" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "evaluateCompleteDatetime" : {
          "type" : "string"
        },
        "evaluateStartDatetime" : {
          "type" : "string"
        },
        "requestedBy" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestreportrequest"
      }
    },
    "AppointmentschedulingAppointmentblockGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "provider" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "types" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "appointmentschedulingappointmentblock"
      }
    },
    "Hl7sourceUpdate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "hl7source"
      }
    },
    "PersonAttributeGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "hydratedObject" : {
          "type" : "string"
        },
        "voided" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        },
        "auditInfo" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personattribute"
      }
    },
    "EncountertypeUpdate" : {
      "type" : "object",
      "required" : [ "name", "description" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "encountertype"
      }
    },
    "CohortMemberGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "patient" : {
          "type" : "string"
        },
        "display" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "cohortmember"
      }
    },
    "WorkflowStateGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "concept" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "retired" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "workflowstate"
      }
    },
    "UserUpdate" : {
      "type" : "object",
      "required" : [ "username", "password", "person" ],
      "properties" : {
        "userProperties" : {
          "type" : "string"
        },
        "secretQuestion" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "username" : {
          "type" : "string"
        },
        "proficientLocales" : {
          "type" : "string"
        },
        "roles" : {
          "type" : "string"
        },
        "systemId" : {
          "type" : "string"
        },
        "password" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "user"
      }
    },
    "ReportingrestReportDefinitionGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "class" : {
          "type" : "string"
        },
        "parameters" : {
          "type" : "string"
        },
        "uuid" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "reportingrestreportdefinition"
      }
    },
    "PersonNameUpdate" : {
      "type" : "object",
      "required" : [ "givenName", "familyName" ],
      "properties" : {
        "middleName" : {
          "type" : "string"
        },
        "familyName2" : {
          "type" : "string"
        },
        "degree" : {
          "type" : "string"
        },
        "familyNameSuffix" : {
          "type" : "string"
        },
        "prefix" : {
          "type" : "string"
        },
        "familyName" : {
          "type" : "string"
        },
        "givenName" : {
          "type" : "string"
        },
        "preferred" : {
          "type" : "string"
        },
        "familyNamePrefix" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personname"
      }
    },
    "VisitUpdate" : {
      "type" : "object",
      "required" : [ "visitType" ],
      "properties" : {
        "stopDatetime" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string"
        },
        "indication" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "encounters" : {
          "type" : "string"
        },
        "startDatetime" : {
          "type" : "string"
        },
        "visitType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visit"
      }
    },
    "OrderfrequencyUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "orderfrequency"
      }
    },
    "FieldAnswerCreate" : {
      "type" : "object",
      "required" : [ "field", "concept" ],
      "properties" : {
        "field" : {
          "type" : "string"
        },
        "concept" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "fieldanswer"
      }
    },
    "FormFormfieldCreate" : {
      "type" : "object",
      "required" : [ "form", "field", "required" ],
      "properties" : {
        "field" : {
          "type" : "string"
        },
        "fieldNumber" : {
          "type" : "string"
        },
        "form" : {
          "type" : "string"
        },
        "maxOccurs" : {
          "type" : "string"
        },
        "sortWeight" : {
          "type" : "string"
        },
        "pageNumber" : {
          "type" : "string"
        },
        "parent" : {
          "type" : "string"
        },
        "fieldPart" : {
          "type" : "string"
        },
        "required" : {
          "type" : "string"
        },
        "minOccurs" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "formformfield"
      }
    },
    "PatientIdentifierCreate" : {
      "type" : "object",
      "required" : [ "identifier", "identifierType" ],
      "properties" : {
        "location" : {
          "type" : "string"
        },
        "preferred" : {
          "type" : "string"
        },
        "identifierType" : {
          "type" : "string"
        },
        "identifier" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "patientidentifier"
      }
    },
    "RoleCreate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "privileges" : {
          "type" : "string"
        },
        "inheritedRoles" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "role"
      }
    },
    "ProblemCreate" : {
      "type" : "object",
      "required" : [ "person", "startDate", "problem" ],
      "properties" : {
        "modifier" : {
          "type" : "string"
        },
        "startDate" : {
          "type" : "string"
        },
        "person" : {
          "type" : "string"
        },
        "stopObs" : {
          "type" : "string"
        },
        "startObs" : {
          "type" : "string"
        },
        "sortWeight" : {
          "type" : "string"
        },
        "problem" : {
          "type" : "string"
        },
        "comments" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "problem"
      }
    },
    "DhisconnectorOrgunitsGet" : {
      "type" : "object",
      "required" : [ ],
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "created" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "lastUpdated" : {
          "type" : "string"
        },
        "code" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "dhisconnectororgunits"
      }
    },
    "VisitAttributeCreate" : {
      "type" : "object",
      "required" : [ "attributeType", "value" ],
      "properties" : {
        "value" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "visitattribute"
      }
    },
    "RelationshipCreate" : {
      "type" : "object",
      "required" : [ "personA", "relationshipType", "personB" ],
      "properties" : {
        "startDate" : {
          "type" : "string"
        },
        "relationshipType" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string"
        },
        "personA" : {
          "type" : "string"
        },
        "personB" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "relationship"
      }
    },
    "LocationUpdate" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "tags" : {
          "type" : "string"
        },
        "countyDistrict" : {
          "type" : "string"
        },
        "address1" : {
          "type" : "string"
        },
        "address2" : {
          "type" : "string"
        },
        "parentLocation" : {
          "type" : "string"
        },
        "address3" : {
          "type" : "string"
        },
        "country" : {
          "type" : "string"
        },
        "address6" : {
          "type" : "string"
        },
        "address5" : {
          "type" : "string"
        },
        "address4" : {
          "type" : "string"
        },
        "postalCode" : {
          "type" : "string"
        },
        "childLocations" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "cityVillage" : {
          "type" : "string"
        },
        "stateProvince" : {
          "type" : "string"
        },
        "longitude" : {
          "type" : "string"
        },
        "attributes" : {
          "type" : "string"
        },
        "latitude" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "location"
      }
    },
    "PersonAttributeUpdate" : {
      "type" : "object",
      "required" : [ "attributeType" ],
      "properties" : {
        "hydratedObject" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "attributeType" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "personattribute"
      }
    }
  }
}
