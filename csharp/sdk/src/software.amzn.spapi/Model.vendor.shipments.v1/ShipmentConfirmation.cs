/*
 * Selling Partner API for Retail Procurement Shipments
 *
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = software.amzn.spapi.Client.OpenAPIDateConverter;

namespace software.amzn.spapi.Model.vendor.shipments.v1
{
    /// <summary>
    /// A list of one or more shipment confirmations.
    /// </summary>
    [DataContract(Name = "ShipmentConfirmation")]
    public partial class ShipmentConfirmation : IValidatableObject
    {
        /// <summary>
        /// Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation.
        /// </summary>
        /// <value>Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ShipmentConfirmationTypeEnum
        {
            /// <summary>
            /// Enum Original for value: Original
            /// </summary>
            [EnumMember(Value = "Original")]
            Original = 1,

            /// <summary>
            /// Enum Replace for value: Replace
            /// </summary>
            [EnumMember(Value = "Replace")]
            Replace = 2
        }


        /// <summary>
        /// Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation.
        /// </summary>
        /// <value>Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation.</value>
        [DataMember(Name = "shipmentConfirmationType", IsRequired = true, EmitDefaultValue = true)]
        public ShipmentConfirmationTypeEnum ShipmentConfirmationType { get; set; }
        /// <summary>
        /// The type of shipment.
        /// </summary>
        /// <value>The type of shipment.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ShipmentTypeEnum
        {
            /// <summary>
            /// Enum TruckLoad for value: TruckLoad
            /// </summary>
            [EnumMember(Value = "TruckLoad")]
            TruckLoad = 1,

            /// <summary>
            /// Enum LessThanTruckLoad for value: LessThanTruckLoad
            /// </summary>
            [EnumMember(Value = "LessThanTruckLoad")]
            LessThanTruckLoad = 2,

            /// <summary>
            /// Enum SmallParcel for value: SmallParcel
            /// </summary>
            [EnumMember(Value = "SmallParcel")]
            SmallParcel = 3
        }


        /// <summary>
        /// The type of shipment.
        /// </summary>
        /// <value>The type of shipment.</value>
        [DataMember(Name = "shipmentType", EmitDefaultValue = false)]
        public ShipmentTypeEnum? ShipmentType { get; set; }
        /// <summary>
        /// Shipment hierarchical structure.
        /// </summary>
        /// <value>Shipment hierarchical structure.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ShipmentStructureEnum
        {
            /// <summary>
            /// Enum PalletizedAssortmentCase for value: PalletizedAssortmentCase
            /// </summary>
            [EnumMember(Value = "PalletizedAssortmentCase")]
            PalletizedAssortmentCase = 1,

            /// <summary>
            /// Enum LooseAssortmentCase for value: LooseAssortmentCase
            /// </summary>
            [EnumMember(Value = "LooseAssortmentCase")]
            LooseAssortmentCase = 2,

            /// <summary>
            /// Enum PalletOfItems for value: PalletOfItems
            /// </summary>
            [EnumMember(Value = "PalletOfItems")]
            PalletOfItems = 3,

            /// <summary>
            /// Enum PalletizedStandardCase for value: PalletizedStandardCase
            /// </summary>
            [EnumMember(Value = "PalletizedStandardCase")]
            PalletizedStandardCase = 4,

            /// <summary>
            /// Enum LooseStandardCase for value: LooseStandardCase
            /// </summary>
            [EnumMember(Value = "LooseStandardCase")]
            LooseStandardCase = 5,

            /// <summary>
            /// Enum MasterPallet for value: MasterPallet
            /// </summary>
            [EnumMember(Value = "MasterPallet")]
            MasterPallet = 6,

            /// <summary>
            /// Enum MasterCase for value: MasterCase
            /// </summary>
            [EnumMember(Value = "MasterCase")]
            MasterCase = 7
        }


        /// <summary>
        /// Shipment hierarchical structure.
        /// </summary>
        /// <value>Shipment hierarchical structure.</value>
        [DataMember(Name = "shipmentStructure", EmitDefaultValue = false)]
        public ShipmentStructureEnum? ShipmentStructure { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ShipmentConfirmation" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ShipmentConfirmation() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ShipmentConfirmation" /> class.
        /// </summary>
        /// <param name="shipmentIdentifier">Unique shipment ID (not used over the last 365 days). (required).</param>
        /// <param name="shipmentConfirmationType">Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation. (required).</param>
        /// <param name="shipmentType">The type of shipment..</param>
        /// <param name="shipmentStructure">Shipment hierarchical structure..</param>
        /// <param name="transportationDetails">transportationDetails.</param>
        /// <param name="amazonReferenceNumber">The Amazon Reference Number is a unique identifier generated by Amazon for all Collect/WePay shipments when you submit  a routing request. This field is mandatory for Collect/WePay shipments..</param>
        /// <param name="shipmentConfirmationDate">Date on which the shipment confirmation was submitted. (required).</param>
        /// <param name="shippedDate">The date and time of the departure of the shipment from the vendor&#39;s location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future..</param>
        /// <param name="estimatedDeliveryDate">The date and time on which the shipment is estimated to reach buyer&#39;s warehouse. It needs to be an estimate based on the average transit time between ship from location and the destination. The exact appointment time will be provided by the buyer and is potentially not known when creating the shipment confirmation..</param>
        /// <param name="sellingParty">sellingParty (required).</param>
        /// <param name="shipFromParty">shipFromParty (required).</param>
        /// <param name="shipToParty">shipToParty (required).</param>
        /// <param name="shipmentMeasurements">shipmentMeasurements.</param>
        /// <param name="importDetails">importDetails.</param>
        /// <param name="shippedItems">A list of the items in this shipment and their associated details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level. (required).</param>
        /// <param name="cartons">A list of the cartons in this shipment..</param>
        /// <param name="pallets">A list of the pallets in this shipment..</param>
        public ShipmentConfirmation(string shipmentIdentifier = default(string), ShipmentConfirmationTypeEnum shipmentConfirmationType = default(ShipmentConfirmationTypeEnum), ShipmentTypeEnum? shipmentType = default(ShipmentTypeEnum?), ShipmentStructureEnum? shipmentStructure = default(ShipmentStructureEnum?), TransportationDetailsForShipmentConfirmation transportationDetails = default(TransportationDetailsForShipmentConfirmation), string amazonReferenceNumber = default(string), DateTime shipmentConfirmationDate = default(DateTime), DateTime shippedDate = default(DateTime), DateTime estimatedDeliveryDate = default(DateTime), PartyIdentification sellingParty = default(PartyIdentification), PartyIdentification shipFromParty = default(PartyIdentification), PartyIdentification shipToParty = default(PartyIdentification), ShipmentMeasurements shipmentMeasurements = default(ShipmentMeasurements), ImportDetails importDetails = default(ImportDetails), List<Item> shippedItems = default(List<Item>), List<Carton> cartons = default(List<Carton>), List<Pallet> pallets = default(List<Pallet>))
        {
            // to ensure "shipmentIdentifier" is required (not null)
            if (shipmentIdentifier == null)
            {
                throw new ArgumentNullException("shipmentIdentifier is a required property for ShipmentConfirmation and cannot be null");
            }
            this.ShipmentIdentifier = shipmentIdentifier;
            this.ShipmentConfirmationType = shipmentConfirmationType;
            this.ShipmentConfirmationDate = shipmentConfirmationDate;
            // to ensure "sellingParty" is required (not null)
            if (sellingParty == null)
            {
                throw new ArgumentNullException("sellingParty is a required property for ShipmentConfirmation and cannot be null");
            }
            this.SellingParty = sellingParty;
            // to ensure "shipFromParty" is required (not null)
            if (shipFromParty == null)
            {
                throw new ArgumentNullException("shipFromParty is a required property for ShipmentConfirmation and cannot be null");
            }
            this.ShipFromParty = shipFromParty;
            // to ensure "shipToParty" is required (not null)
            if (shipToParty == null)
            {
                throw new ArgumentNullException("shipToParty is a required property for ShipmentConfirmation and cannot be null");
            }
            this.ShipToParty = shipToParty;
            // to ensure "shippedItems" is required (not null)
            if (shippedItems == null)
            {
                throw new ArgumentNullException("shippedItems is a required property for ShipmentConfirmation and cannot be null");
            }
            this.ShippedItems = shippedItems;
            this.ShipmentType = shipmentType;
            this.ShipmentStructure = shipmentStructure;
            this.TransportationDetails = transportationDetails;
            this.AmazonReferenceNumber = amazonReferenceNumber;
            this.ShippedDate = shippedDate;
            this.EstimatedDeliveryDate = estimatedDeliveryDate;
            this.ShipmentMeasurements = shipmentMeasurements;
            this.ImportDetails = importDetails;
            this.Cartons = cartons;
            this.Pallets = pallets;
        }

        /// <summary>
        /// Unique shipment ID (not used over the last 365 days).
        /// </summary>
        /// <value>Unique shipment ID (not used over the last 365 days).</value>
        [DataMember(Name = "shipmentIdentifier", IsRequired = true, EmitDefaultValue = true)]
        public string ShipmentIdentifier { get; set; }

        /// <summary>
        /// Gets or Sets TransportationDetails
        /// </summary>
        [DataMember(Name = "transportationDetails", EmitDefaultValue = false)]
        public TransportationDetailsForShipmentConfirmation TransportationDetails { get; set; }

        /// <summary>
        /// The Amazon Reference Number is a unique identifier generated by Amazon for all Collect/WePay shipments when you submit  a routing request. This field is mandatory for Collect/WePay shipments.
        /// </summary>
        /// <value>The Amazon Reference Number is a unique identifier generated by Amazon for all Collect/WePay shipments when you submit  a routing request. This field is mandatory for Collect/WePay shipments.</value>
        [DataMember(Name = "amazonReferenceNumber", EmitDefaultValue = false)]
        public string AmazonReferenceNumber { get; set; }

        /// <summary>
        /// Date on which the shipment confirmation was submitted.
        /// </summary>
        /// <value>Date on which the shipment confirmation was submitted.</value>
        [DataMember(Name = "shipmentConfirmationDate", IsRequired = true, EmitDefaultValue = true)]
        public DateTime ShipmentConfirmationDate { get; set; }

        /// <summary>
        /// The date and time of the departure of the shipment from the vendor&#39;s location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future.
        /// </summary>
        /// <value>The date and time of the departure of the shipment from the vendor&#39;s location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future.</value>
        [DataMember(Name = "shippedDate", EmitDefaultValue = false)]
        public DateTime ShippedDate { get; set; }

        /// <summary>
        /// The date and time on which the shipment is estimated to reach buyer&#39;s warehouse. It needs to be an estimate based on the average transit time between ship from location and the destination. The exact appointment time will be provided by the buyer and is potentially not known when creating the shipment confirmation.
        /// </summary>
        /// <value>The date and time on which the shipment is estimated to reach buyer&#39;s warehouse. It needs to be an estimate based on the average transit time between ship from location and the destination. The exact appointment time will be provided by the buyer and is potentially not known when creating the shipment confirmation.</value>
        [DataMember(Name = "estimatedDeliveryDate", EmitDefaultValue = false)]
        public DateTime EstimatedDeliveryDate { get; set; }

        /// <summary>
        /// Gets or Sets SellingParty
        /// </summary>
        [DataMember(Name = "sellingParty", IsRequired = true, EmitDefaultValue = true)]
        public PartyIdentification SellingParty { get; set; }

        /// <summary>
        /// Gets or Sets ShipFromParty
        /// </summary>
        [DataMember(Name = "shipFromParty", IsRequired = true, EmitDefaultValue = true)]
        public PartyIdentification ShipFromParty { get; set; }

        /// <summary>
        /// Gets or Sets ShipToParty
        /// </summary>
        [DataMember(Name = "shipToParty", IsRequired = true, EmitDefaultValue = true)]
        public PartyIdentification ShipToParty { get; set; }

        /// <summary>
        /// Gets or Sets ShipmentMeasurements
        /// </summary>
        [DataMember(Name = "shipmentMeasurements", EmitDefaultValue = false)]
        public ShipmentMeasurements ShipmentMeasurements { get; set; }

        /// <summary>
        /// Gets or Sets ImportDetails
        /// </summary>
        [DataMember(Name = "importDetails", EmitDefaultValue = false)]
        public ImportDetails ImportDetails { get; set; }

        /// <summary>
        /// A list of the items in this shipment and their associated details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.
        /// </summary>
        /// <value>A list of the items in this shipment and their associated details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.</value>
        [DataMember(Name = "shippedItems", IsRequired = true, EmitDefaultValue = true)]
        public List<Item> ShippedItems { get; set; }

        /// <summary>
        /// A list of the cartons in this shipment.
        /// </summary>
        /// <value>A list of the cartons in this shipment.</value>
        [DataMember(Name = "cartons", EmitDefaultValue = false)]
        public List<Carton> Cartons { get; set; }

        /// <summary>
        /// A list of the pallets in this shipment.
        /// </summary>
        /// <value>A list of the pallets in this shipment.</value>
        [DataMember(Name = "pallets", EmitDefaultValue = false)]
        public List<Pallet> Pallets { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ShipmentConfirmation {\n");
            sb.Append("  ShipmentIdentifier: ").Append(ShipmentIdentifier).Append("\n");
            sb.Append("  ShipmentConfirmationType: ").Append(ShipmentConfirmationType).Append("\n");
            sb.Append("  ShipmentType: ").Append(ShipmentType).Append("\n");
            sb.Append("  ShipmentStructure: ").Append(ShipmentStructure).Append("\n");
            sb.Append("  TransportationDetails: ").Append(TransportationDetails).Append("\n");
            sb.Append("  AmazonReferenceNumber: ").Append(AmazonReferenceNumber).Append("\n");
            sb.Append("  ShipmentConfirmationDate: ").Append(ShipmentConfirmationDate).Append("\n");
            sb.Append("  ShippedDate: ").Append(ShippedDate).Append("\n");
            sb.Append("  EstimatedDeliveryDate: ").Append(EstimatedDeliveryDate).Append("\n");
            sb.Append("  SellingParty: ").Append(SellingParty).Append("\n");
            sb.Append("  ShipFromParty: ").Append(ShipFromParty).Append("\n");
            sb.Append("  ShipToParty: ").Append(ShipToParty).Append("\n");
            sb.Append("  ShipmentMeasurements: ").Append(ShipmentMeasurements).Append("\n");
            sb.Append("  ImportDetails: ").Append(ImportDetails).Append("\n");
            sb.Append("  ShippedItems: ").Append(ShippedItems).Append("\n");
            sb.Append("  Cartons: ").Append(Cartons).Append("\n");
            sb.Append("  Pallets: ").Append(Pallets).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
