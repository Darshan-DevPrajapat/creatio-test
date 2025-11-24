define("UsrConcertsFreedom_FormPage", /**SCHEMA_DEPS*/[  ]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/() /**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "merge",
				"name": "CenterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "CenterContainer",
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
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
					"entitySchemaName": "UsrConcertsFreedom"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "9568b4e8-5d7f-4c67-a049-04a434d45d86",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_mjrsezm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_mjrsezm_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_old38el",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_old38el_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddPerformancesFreedom",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessSchemaConcertId"
						}
					}
				},
				"parentName": "Button_mjrsezm",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_rev62zg",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_a4984fg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrName_z6nncl6",
					"labelPosition": "auto",
					"control": "$PDS_UsrName_z6nncl6"
				},
				"parentName": "GridContainer_rev62zg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_3y2ufrn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrCode_dlgsad8",
					"labelPosition": "auto",
					"control": "$PDS_UsrCode_dlgsad8"
				},
				"parentName": "GridContainer_rev62zg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrConcertType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrConcertType_whiykpi",
					"labelPosition": "auto",
					"control": "$PDS_UsrConcertType_whiykpi",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_rev62zg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_hwivzgz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hwivzgz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrConcertType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOwner",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOwner_k7arusu",
					"labelPosition": "auto",
					"control": "$PDS_UsrOwner_k7arusu",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_rev62zg",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrNotes",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNotes_vrbz44o",
					"labelPosition": "auto",
					"control": "$PDS_UsrNotes_vrbz44o",
					"multiline": false
				},
				"parentName": "GridContainer_rev62zg",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrActive",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrActive_s3of4xa",
					"labelPosition": "auto",
					"control": "$PDS_UsrActive_s3of4xa"
				},
				"parentName": "GridContainer_rev62zg",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_z9nn92u",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ieon8wo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ieon8wo_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_eo66smg",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ieon8wo",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mcopngm",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_eo66smg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_wcx8x40",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_wcx8x40_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrPerformancesFreedom"
						}
					}
				},
				"parentName": "FlexContainer_mcopngm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_6dfzs1n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_6dfzs1n_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_r0rpz96DS"
						}
					}
				},
				"parentName": "FlexContainer_mcopngm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_xu5j7l2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_xu5j7l2_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_mcopngm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_j32i06c",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_j32i06c_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_r0rpz96"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_xu5j7l2",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ekapd8p",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ekapd8p_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrPerformancesFreedom"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_xu5j7l2",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_7ia3a4n",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_7ia3a4n_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_7ia3a4n_GridDetail_r0rpz96",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_r0rpz96"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_7ia3a4n_SearchValue",
							"GridDetailSearchFilter_7ia3a4n_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_mcopngm",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_alerujx",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ieon8wo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_r0rpz96",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_r0rpz96",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_r0rpz96DS_Id",
					"columns": [
						{
							"id": "9eaef29f-1db4-513f-fe2f-053ce1f103b0",
							"code": "GridDetail_r0rpz96DS_UsrName",
							"caption": "#ResourceString(GridDetail_r0rpz96DS_UsrName)#",
							"dataValueType": 28
						},
						{
							"id": "9b93eb5e-a9ac-c307-8809-417ff3a6ba08",
							"code": "GridDetail_r0rpz96DS_UsrNumber",
							"caption": "#ResourceString(GridDetail_r0rpz96DS_UsrNumber)#",
							"dataValueType": 4
						},
						{
							"id": "a15d801a-ef10-c0ed-1c60-fe2cc72bd413",
							"code": "GridDetail_r0rpz96DS_UsrPerformancesType",
							"caption": "#ResourceString(GridDetail_r0rpz96DS_UsrPerformancesType)#",
							"dataValueType": 10
						},
						{
							"id": "419f3daa-97d6-f6f1-d25f-ef4028e6fa8f",
							"code": "GridDetail_r0rpz96DS_UsrDurationMinutes",
							"caption": "#ResourceString(GridDetail_r0rpz96DS_UsrDurationMinutes)#",
							"dataValueType": 4
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_alerujx",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ServerMessageReceivedFunc": {},
					"PDS_UsrName_z6nncl6": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrCode_dlgsad8": {
						"modelConfig": {
							"path": "PDS.UsrCode"
						}
					},
					"PDS_UsrConcertType_whiykpi": {
						"modelConfig": {
							"path": "PDS.UsrConcertType"
						}
					},
					"PDS_UsrOwner_k7arusu": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"PDS_UsrNotes_vrbz44o": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"PDS_UsrActive_s3of4xa": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					},
					"GridDetail_r0rpz96": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_r0rpz96DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_7ia3a4n_GridDetail_r0rpz96",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_r0rpz96DS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_r0rpz96DS.UsrName"
									}
								},
								"GridDetail_r0rpz96DS_UsrNumber": {
									"modelConfig": {
										"path": "GridDetail_r0rpz96DS.UsrNumber"
									}
								},
								"GridDetail_r0rpz96DS_UsrPerformancesType": {
									"modelConfig": {
										"path": "GridDetail_r0rpz96DS.UsrPerformancesType"
									}
								},
								"GridDetail_r0rpz96DS_UsrDurationMinutes": {
									"modelConfig": {
										"path": "GridDetail_r0rpz96DS.UsrDurationMinutes"
									}
								},
								"GridDetail_r0rpz96DS_Id": {
									"modelConfig": {
										"path": "GridDetail_r0rpz96DS.Id"
									}
								}
							}
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
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_r0rpz96DS": [
							{
								"attributePath": "UsrConcert",
								"relationPath": "PDS.Id"
							}
						]
					}
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
							"entitySchemaName": "UsrConcertsFreedom"
						},
						"scope": "page"
					},
					"GridDetail_r0rpz96DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrPerformancesFreedom",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrNumber": {
									"path": "UsrNumber"
								},
								"UsrPerformancesType": {
									"path": "UsrPerformancesType"
								},
								"UsrDurationMinutes": {
									"path": "UsrDurationMinutes"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/ [{
                request: "crt.HandleViewModelInitRequest",
                handler: async (request, next) => {
                    request.$context.ServerMessageReceivedFunc = async function(event, message) {
                        if (message.Header.Sender === "AddingPerformancesFreedom") {
                            console.log("Message received");
                            request.$context.executeRequest({
                                type: "crt.LoadDataRequest",
                                $context: this,
                                config: {
                                    loadType: "reload",
                                    useLastLoadParameters: true
                                },
                                dataSourceName: "GridDetail_r0rpz96DS"
                            });
                        }
                    };
                    Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE, (await request.$context.ServerMessageReceivedFunc), request.$context);
                    return next?.handle(request);
                }
            },
            {
                request: "crt.HandleViewModelDestroyRequest",
                handler: async (request, next) => {
                    Terrasoft.ServerChannel.un(Terrasoft.EventName.ON_MESSAGE, (await request.$context.ServerMessageReceivedFunc), request.$context);
                    return next?.handle(request);
                }
            }
        ] /**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/ {} /**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/ {} /**SCHEMA_VALIDATORS*/
	};
});