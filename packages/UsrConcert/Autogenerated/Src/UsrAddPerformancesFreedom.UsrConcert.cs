namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrAddPerformancesFreedomMethodsWrapper

	/// <exclude/>
	public class UsrAddPerformancesFreedomMethodsWrapper : ProcessModel
	{

		public UsrAddPerformancesFreedomMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var userConnection = Get<UserConnection>("UserConnection");
			Terrasoft.Configuration.MsgChannelUtilities.PostMessage(
			userConnection,
			"AddingPerformancesFreedom",
			"");
			return true;
		}

		#endregion

	}

	#endregion

}

