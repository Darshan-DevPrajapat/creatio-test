define("UsrPerformancesFreedom_FormPage", /**SCHEMA_DEPS*/ ["@creatio-devkit/common"] /**SCHEMA_DEPS*/ , function /**SCHEMA_ARGS*/(sdk) /**SCHEMA_ARGS*/ {
    return {
        viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/ [{
                "operation": "remove",
                "name": "SideAreaProfileContainer"
            },
            {
                "operation": "remove",
                "name": "Tabs"
            },
            {
                "operation": "remove",
                "name": "GeneralInfoTab"
            },
            {
                "operation": "remove",
                "name": "GeneralInfoTabContainer"
            },
            {
                "operation": "merge",
                "name": "CardToggleTabPanel",
                "values": {
                    "styleType": "default",
                    "bodyBackgroundColor": "primary-contrast-500",
                    "selectedTabTitleColor": "auto",
                    "tabTitleColor": "auto",
                    "underlineSelectedTabColor": "auto",
                    "headerBackgroundColor": "auto"
                }
            },
            {
                "operation": "merge",
                "name": "Feed",
                "values": {
                    "dataSourceName": "PDS",
                    "entitySchemaName": "UsrPerformancesFreedom"
                }
            },
            {
                "operation": "merge",
                "name": "AttachmentList",
                "values": {
                    "columns": [{
                        "id": "edfec8a2-0a81-48a8-be4b-a9ba612a62fd",
                        "code": "AttachmentListDS_Name",
                        "caption": "#ResourceString(AttachmentListDS_Name)#",
                        "dataValueType": 28,
                        "width": 200
                    }]
                }
            },
            {
                "operation": "insert",
                "name": "UsrNumber",
                "values": {
                    "type": "crt.NumberInput",
                    "label": "$Resources.Strings.PDS_UsrNumber_m83sb7w",
                    "labelPosition": "auto",
                    "control": "$PDS_UsrNumber_m83sb7w"
                },
                "parentName": "MainHeader",
                "propertyName": "items",
                "index": 2
            },
            {
                "operation": "insert",
                "name": "UsrName",
                "values": {
                    "type": "crt.Input",
                    "label": "$Resources.Strings.UsrName",
                    "control": "$UsrName",
                    "labelPosition": "auto"
                },
                "parentName": "MainHeader",
                "propertyName": "items",
                "index": 3
            },
            {
                "operation": "insert",
                "name": "UsrDurationMinutes",
                "values": {
                    "type": "crt.NumberInput",
                    "label": "$Resources.Strings.PDS_UsrDurationMinutes_9zwy5pz",
                    "labelPosition": "auto",
                    "control": "$PDS_UsrDurationMinutes_9zwy5pz"
                },
                "parentName": "MainHeader",
                "propertyName": "items",
                "index": 4
            },
            {
                "operation": "insert",
                "name": "UsrPerformancesType",
                "values": {
                    "type": "crt.ComboBox",
                    "label": "$Resources.Strings.PDS_UsrPerformancesType_x5wgw6p",
                    "labelPosition": "auto",
                    "control": "$PDS_UsrPerformancesType_x5wgw6p",
                    "listActions": [],
                    "showValueAsLink": true,
                    "controlActions": [],
                    "visible": true,
                    "readonly": false,
                    "placeholder": "",
                    "tooltip": "",
                    "valueDetails": null
                },
                "parentName": "MainHeader",
                "propertyName": "items",
                "index": 5
            },
            {
                "operation": "insert",
                "name": "UsrConcert",
                "values": {
                    "type": "crt.ComboBox",
                    "label": "$Resources.Strings.PDS_UsrConcert_09vzmi6",
                    "labelPosition": "auto",
                    "control": "$PDS_UsrConcert_09vzmi6",
                    "listActions": [],
                    "showValueAsLink": true,
                    "controlActions": [],
                    "visible": true,
                    "readonly": false,
                    "placeholder": "",
                    "tooltip": "",
                    "valueDetails": null
                },
                "parentName": "MainHeader",
                "propertyName": "items",
                "index": 6
            },
            {
                "operation": "insert",
                "name": "addRecord_7n2oivp",
                "values": {
                    "code": "addRecord",
                    "type": "crt.ComboboxSearchTextAction",
                    "icon": "combobox-add-new",
                    "caption": "#ResourceString(addRecord_7n2oivp_caption)#",
                    "clicked": {
                        "request": "crt.CreateRecordFromLookupRequest",
                        "params": {}
                    }
                },
                "parentName": "UsrConcert",
                "propertyName": "listActions",
                "index": 0
            }
        ] /**SCHEMA_VIEW_CONFIG_DIFF*/ ,
        viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/ [{
                "operation": "merge",
                "path": [
                    "attributes"
                ],
                "values": {
                    "UsrName": {
                        "modelConfig": {
                            "path": "PDS.UsrName"
                        }
                    },
                    "PDS_UsrNumber_m83sb7w": {
                        "modelConfig": {
                            "path": "PDS.UsrNumber"
                        }
                    },
                    "PDS_UsrDurationMinutes_9zwy5pz": {
                        "modelConfig": {
                            "path": "PDS.UsrDurationMinutes"
                        }
                    },
                    "PDS_UsrPerformancesType_x5wgw6p": {
                        "modelConfig": {
                            "path": "PDS.UsrPerformancesType"
                        }
                    },
                    "PDS_UsrConcert_09vzmi6": {
                        "modelConfig": {
                            "path": "PDS.UsrConcert"
                        }
                    }
                }
            },
            {
                "operation": "merge",
                "path": [
                    "attributes",
                    "Id",
                    "modelConfig"
                ],
                "values": {
                    "path": "PDS.Id"
                }
            }
        ] /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/ ,
        modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/ [{
                "operation": "merge",
                "path": [],
                "values": {
                    "primaryDataSourceName": "PDS"
                }
            },
            {
                "operation": "merge",
                "path": [
                    "dataSources"
                ],
                "values": {
                    "PDS": {
                        "type": "crt.EntityDataSource",
                        "config": {
                            "entitySchemaName": "UsrPerformancesFreedom"
                        },
                        "scope": "page"
                    }
                }
            }
        ] /**SCHEMA_MODEL_CONFIG_DIFF*/ ,
        handlers: /**SCHEMA_HANDLERS*/ [{
                "request": "crt.SaveRecordRequest",
                "handler": async (request, next) => {
                    const requestContext = request.$context;
                    const sysSettingsService = new sdk.SysSettingsService();
                    const maxDuration = await sysSettingsService.getByCode("UsrMaximumDurationFreedom");
                    console.log(maxDuration.value);
                    const id = await requestContext.Id;
                    const concert = await requestContext.PDS_UsrConcert_09vzmi6;
                    const duration = await requestContext.PDS_UsrDurationMinutes_9zwy5pz;
                    const performances = await sdk.Model.create("UsrPerformancesFreedom");
                    const filter = new sdk.FilterGroup();
                    await filter.addSchemaColumnFilterWithParameter(
                        sdk.ComparisonType.Not_equal,
                        "Id",
                        id
                    );
                    await filter.addSchemaColumnFilterWithParameter(
                        sdk.ComparisonType.Equal,
                        "UsrConcert",
                        concert.value
                    );
                    const newFilter = Object.assign({}, filter);
                    newFilter.items = filter.items;

                    const result = await performances.load({
                        attributes: ["UsrDurationMinutes"],
                        parameters: [{
                            type: sdk.ModelParameterType.Filter,
                            value: newFilter,
                        }, ],
                    });
                    console.log(result);
                    const totalDuration = result.reduce((sum, item) => sum + item.UsrDurationMinutes, 0);
                    var isValid = true;
                    const currentTotalDuration = totalDuration + duration;
                    console.log(currentTotalDuration);
                    if (currentTotalDuration > maxDuration.value) {
                        isValid = false;
                    }
                    if (isValid) {
                        await next?.handle(request);
                    } else {
                        const dialogConfig = {
                            data: {
                                title: "Validation Error",
                                message: `No more than ${maxDuration.value} total performances duration is allowed.`,
                            }
                        };
                        await requestContext.executeRequest({
                            type: "crt.ShowDialogRequest",
                            requestContext,
                            dialogConfig
                        });
                    }
                }
            },

        ] /**SCHEMA_HANDLERS*/ ,
        converters: /**SCHEMA_CONVERTERS*/ {} /**SCHEMA_CONVERTERS*/ ,
        validators: /**SCHEMA_VALIDATORS*/ {} /**SCHEMA_VALIDATORS*/
    };
});