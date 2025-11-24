   namespace Terrasoft.Configuration.UsrConcertServiceFreedom
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;
    using Terrasoft.Common;
    using Terrasoft.Web.Common;
    using Terrasoft.Core.Entities; 

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrConcertServiceFreedom: BaseService
    {

        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
        ResponseFormat = WebMessageFormat.Json)]
        public int GetTotalDuration(string code) {
            var classQuery = new Select(UserConnection)
                .Column("Id")
                .From("UsrConcertsFreedom")
                .Where("UsrCode")
                    .IsEqual(Column.Parameter(code))
                as Select;
            Guid id = classQuery.ExecuteScalar<Guid>();
            if (id==Guid.Empty) {
                return -1;
            }
            var sumQuery = new Select(UserConnection)
                .Column(Func.Coalesce(Func.Sum("UsrDurationMinutes"), Column.Parameter(0)))
                .From("UsrPerformancesFreedom")
                .Where("UsrConcertId")
                    .IsEqual(Column.Parameter(id))
                as Select;
            int result = sumQuery.ExecuteScalar<int>();
            
            return result;
        }
    }
}
