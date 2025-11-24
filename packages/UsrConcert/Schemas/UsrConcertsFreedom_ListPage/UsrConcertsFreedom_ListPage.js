define("UsrConcertsFreedom_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrConcertsFreedom"
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
					"rootSchemaName": "UsrConcertsFreedom"
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
							"id": "63accff1-e21f-6101-19d9-6e2165eb123f",
							"code": "PDS_UsrCode",
							"caption": "#ResourceString(PDS_UsrCode)#",
							"dataValueType": 28
						},
						{
							"id": "208ac3d5-aaef-5743-d2c4-c1a4d2cda8b0",
							"code": "PDS_UsrConcertType",
							"caption": "#ResourceString(PDS_UsrConcertType)#",
							"dataValueType": 10
						},
						{
							"id": "8aacce9f-351b-e976-68d7-2cc47e2b09ec",
							"code": "PDS_UsrOwner",
							"caption": "#ResourceString(PDS_UsrOwner)#",
							"dataValueType": 10
						},
						{
							"id": "c97d205d-6e57-664a-5714-8a55041e6e3a",
							"code": "PDS_UsrNotes",
							"caption": "#ResourceString(PDS_UsrNotes)#",
							"dataValueType": 30
						},
						{
							"id": "f33b6b57-0229-ac3b-063a-b769619b46b6",
							"code": "PDS_UsrActive",
							"caption": "#ResourceString(PDS_UsrActive)#",
							"dataValueType": 12
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
					"PDS_UsrCode": {
						"modelConfig": {
							"path": "PDS.UsrCode"
						}
					},
					"PDS_UsrConcertType": {
						"modelConfig": {
							"path": "PDS.UsrConcertType"
						}
					},
					"PDS_UsrOwner": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"PDS_UsrNotes": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"PDS_UsrActive": {
						"modelConfig": {
							"path": "PDS.UsrActive"
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
					"entitySchemaName": "UsrConcertsFreedom",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrCode": {
							"path": "UsrCode"
						},
						"UsrConcertType": {
							"path": "UsrConcertType"
						},
						"UsrOwner": {
							"path": "UsrOwner"
						},
						"UsrNotes": {
							"path": "UsrNotes"
						},
						"UsrActive": {
							"path": "UsrActive"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});