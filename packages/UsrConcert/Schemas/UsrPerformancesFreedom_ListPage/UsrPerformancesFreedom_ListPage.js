define("UsrPerformancesFreedom_ListPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrPerformancesFreedom"
						}
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrPerformancesFreedom"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1
						},
						{
							"id": "c2c34ee7-d63d-0449-a08d-2c609f85ea01",
							"code": "PDS_UsrNumber",
							"caption": "#ResourceString(PDS_UsrNumber)#",
							"dataValueType": 4
						},
						{
							"id": "4e12921c-a66c-abb0-bc7a-7788526935ba",
							"code": "PDS_UsrPerformancesType",
							"caption": "#ResourceString(PDS_UsrPerformancesType)#",
							"dataValueType": 10
						},
						{
							"id": "f3582f00-0bbb-9c7f-dbf0-70e279311120",
							"code": "PDS_UsrDurationMinutes",
							"caption": "#ResourceString(PDS_UsrDurationMinutes)#",
							"dataValueType": 4
						},
						{
							"id": "e9b03d67-197a-6b6b-1e29-8aeb8bcd22e6",
							"code": "PDS_UsrConcert",
							"caption": "#ResourceString(PDS_UsrConcert)#",
							"dataValueType": 10
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrNumber": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrPerformancesType": {
						"modelConfig": {
							"path": "PDS.UsrPerformancesType"
						}
					},
					"PDS_UsrDurationMinutes": {
						"modelConfig": {
							"path": "PDS.UsrDurationMinutes"
						}
					},
					"PDS_UsrConcert": {
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
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
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
						},
						"UsrConcert": {
							"path": "UsrConcert"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
    "request": "crt.SaveRecordRequest",
    "handler": async (request, next) => {
        const requestContext = request.$context;
        const sysSettingsService = new sdk.SysSettingsService();

		const someSetting = await sysSettingsService.getByCode("Usr");
        if (isValid) {
            await next?.handle(request);
        } else {
            const dialogConfig = {
                data:{
                    title: "Validation Error",
                    message: "Object is not valid!",
                }
            };
            await requestContext.executeRequest({type:"crt.ShowDialogRequest", requestContext, dialogConfig});
        }
    }
},
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});