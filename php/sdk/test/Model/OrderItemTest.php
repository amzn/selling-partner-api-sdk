<?php
/**
 * OrderItemTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\orders\v0\OrderItem;

/**
 * OrderItemTest Class Doc Comment
 *
 * @category    Class
 * @description A single order item.
 * @package     SpApi
 */
class OrderItemTest extends TestCase
{

    private OrderItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItem"
     */
    public function testOrderItem()
    {
        $this->assertInstanceOf(OrderItem::class, $this->model);
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "order_item_id"
     */
    public function testPropertyOrderItemId()
    {
        $testValue = 'test';
        
        $this->model->setOrderItemId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderItemId());
    }

    /**
     * Test attribute "associated_items"
     */
    public function testPropertyAssociatedItems()
    {
        $testValue = [];
        
        $this->model->setAssociatedItems($testValue);
        $this->assertEquals($testValue, $this->model->getAssociatedItems());
    }

    /**
     * Test attribute "title"
     */
    public function testPropertyTitle()
    {
        $testValue = 'test';
        
        $this->model->setTitle($testValue);
        $this->assertEquals($testValue, $this->model->getTitle());
    }

    /**
     * Test attribute "quantity_ordered"
     */
    public function testPropertyQuantityOrdered()
    {
        $testValue = 123;
        
        $this->model->setQuantityOrdered($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityOrdered());
    }

    /**
     * Test attribute "quantity_shipped"
     */
    public function testPropertyQuantityShipped()
    {
        $testValue = 123;
        
        $this->model->setQuantityShipped($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityShipped());
    }

    /**
     * Test attribute "product_info"
     */
    public function testPropertyProductInfo()
    {
        
        $testValue = new \SpApi\Model\orders\v0\ProductInfoDetail();
        
        $this->model->setProductInfo($testValue);
        $this->assertEquals($testValue, $this->model->getProductInfo());
    }

    /**
     * Test attribute "points_granted"
     */
    public function testPropertyPointsGranted()
    {
        
        $testValue = new \SpApi\Model\orders\v0\PointsGrantedDetail();
        
        $this->model->setPointsGranted($testValue);
        $this->assertEquals($testValue, $this->model->getPointsGranted());
    }

    /**
     * Test attribute "item_price"
     */
    public function testPropertyItemPrice()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setItemPrice($testValue);
        $this->assertEquals($testValue, $this->model->getItemPrice());
    }

    /**
     * Test attribute "shipping_price"
     */
    public function testPropertyShippingPrice()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setShippingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getShippingPrice());
    }

    /**
     * Test attribute "item_tax"
     */
    public function testPropertyItemTax()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setItemTax($testValue);
        $this->assertEquals($testValue, $this->model->getItemTax());
    }

    /**
     * Test attribute "shipping_tax"
     */
    public function testPropertyShippingTax()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setShippingTax($testValue);
        $this->assertEquals($testValue, $this->model->getShippingTax());
    }

    /**
     * Test attribute "shipping_discount"
     */
    public function testPropertyShippingDiscount()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setShippingDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getShippingDiscount());
    }

    /**
     * Test attribute "shipping_discount_tax"
     */
    public function testPropertyShippingDiscountTax()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setShippingDiscountTax($testValue);
        $this->assertEquals($testValue, $this->model->getShippingDiscountTax());
    }

    /**
     * Test attribute "promotion_discount"
     */
    public function testPropertyPromotionDiscount()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setPromotionDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getPromotionDiscount());
    }

    /**
     * Test attribute "promotion_discount_tax"
     */
    public function testPropertyPromotionDiscountTax()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setPromotionDiscountTax($testValue);
        $this->assertEquals($testValue, $this->model->getPromotionDiscountTax());
    }

    /**
     * Test attribute "promotion_ids"
     */
    public function testPropertyPromotionIds()
    {
        $testValue = [];
        
        $this->model->setPromotionIds($testValue);
        $this->assertEquals($testValue, $this->model->getPromotionIds());
    }

    /**
     * Test attribute "cod_fee"
     */
    public function testPropertyCodFee()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setCodFee($testValue);
        $this->assertEquals($testValue, $this->model->getCodFee());
    }

    /**
     * Test attribute "cod_fee_discount"
     */
    public function testPropertyCodFeeDiscount()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setCodFeeDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getCodFeeDiscount());
    }

    /**
     * Test attribute "is_gift"
     */
    public function testPropertyIsGift()
    {
        $testValue = 'test';
        
        $this->model->setIsGift($testValue);
        $this->assertEquals($testValue, $this->model->getIsGift());
    }

    /**
     * Test attribute "condition_note"
     */
    public function testPropertyConditionNote()
    {
        $testValue = 'test';
        
        $this->model->setConditionNote($testValue);
        $this->assertEquals($testValue, $this->model->getConditionNote());
    }

    /**
     * Test attribute "condition_id"
     */
    public function testPropertyConditionId()
    {
        $testValue = 'test';
        
        $this->model->setConditionId($testValue);
        $this->assertEquals($testValue, $this->model->getConditionId());
    }

    /**
     * Test attribute "condition_subtype_id"
     */
    public function testPropertyConditionSubtypeId()
    {
        $testValue = 'test';
        
        $this->model->setConditionSubtypeId($testValue);
        $this->assertEquals($testValue, $this->model->getConditionSubtypeId());
    }

    /**
     * Test attribute "scheduled_delivery_start_date"
     */
    public function testPropertyScheduledDeliveryStartDate()
    {
        $testValue = 'test';
        
        $this->model->setScheduledDeliveryStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledDeliveryStartDate());
    }

    /**
     * Test attribute "scheduled_delivery_end_date"
     */
    public function testPropertyScheduledDeliveryEndDate()
    {
        $testValue = 'test';
        
        $this->model->setScheduledDeliveryEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledDeliveryEndDate());
    }

    /**
     * Test attribute "price_designation"
     */
    public function testPropertyPriceDesignation()
    {
        $testValue = 'test';
        
        $this->model->setPriceDesignation($testValue);
        $this->assertEquals($testValue, $this->model->getPriceDesignation());
    }

    /**
     * Test attribute "tax_collection"
     */
    public function testPropertyTaxCollection()
    {
        
        $testValue = new \SpApi\Model\orders\v0\TaxCollection();
        
        $this->model->setTaxCollection($testValue);
        $this->assertEquals($testValue, $this->model->getTaxCollection());
    }

    /**
     * Test attribute "serial_number_required"
     */
    public function testPropertySerialNumberRequired()
    {
        $testValue = true;
        
        $this->model->setSerialNumberRequired($testValue);
        $this->assertEquals($testValue, $this->model->getSerialNumberRequired());
    }

    /**
     * Test attribute "is_transparency"
     */
    public function testPropertyIsTransparency()
    {
        $testValue = true;
        
        $this->model->setIsTransparency($testValue);
        $this->assertEquals($testValue, $this->model->getIsTransparency());
    }

    /**
     * Test attribute "ioss_number"
     */
    public function testPropertyIossNumber()
    {
        $testValue = 'test';
        
        $this->model->setIossNumber($testValue);
        $this->assertEquals($testValue, $this->model->getIossNumber());
    }

    /**
     * Test attribute "store_chain_store_id"
     */
    public function testPropertyStoreChainStoreId()
    {
        $testValue = 'test';
        
        $this->model->setStoreChainStoreId($testValue);
        $this->assertEquals($testValue, $this->model->getStoreChainStoreId());
    }

    /**
     * Test attribute "deemed_reseller_category"
     */
    public function testPropertyDeemedResellerCategory()
    {
        $enumInstance = new OrderItem();
        $allowedValues = $enumInstance->getDeemedResellerCategoryAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setDeemedResellerCategory($testValue);
        $this->assertEquals($testValue, $this->model->getDeemedResellerCategory());
    }

    /**
     * Test attribute "buyer_info"
     */
    public function testPropertyBuyerInfo()
    {
        
        $testValue = new \SpApi\Model\orders\v0\ItemBuyerInfo();
        
        $this->model->setBuyerInfo($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerInfo());
    }

    /**
     * Test attribute "buyer_requested_cancel"
     */
    public function testPropertyBuyerRequestedCancel()
    {
        
        $testValue = new \SpApi\Model\orders\v0\BuyerRequestedCancel();
        
        $this->model->setBuyerRequestedCancel($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerRequestedCancel());
    }

    /**
     * Test attribute "serial_numbers"
     */
    public function testPropertySerialNumbers()
    {
        $testValue = [];
        
        $this->model->setSerialNumbers($testValue);
        $this->assertEquals($testValue, $this->model->getSerialNumbers());
    }

    /**
     * Test attribute "substitution_preferences"
     */
    public function testPropertySubstitutionPreferences()
    {
        
        $testValue = new \SpApi\Model\orders\v0\SubstitutionPreferences();
        
        $this->model->setSubstitutionPreferences($testValue);
        $this->assertEquals($testValue, $this->model->getSubstitutionPreferences());
    }

    /**
     * Test attribute "measurement"
     */
    public function testPropertyMeasurement()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Measurement();
        
        $this->model->setMeasurement($testValue);
        $this->assertEquals($testValue, $this->model->getMeasurement());
    }

    /**
     * Test attribute "shipping_constraints"
     */
    public function testPropertyShippingConstraints()
    {
        
        $testValue = new \SpApi\Model\orders\v0\ShippingConstraints();
        
        $this->model->setShippingConstraints($testValue);
        $this->assertEquals($testValue, $this->model->getShippingConstraints());
    }

    /**
     * Test attribute "amazon_programs"
     */
    public function testPropertyAmazonPrograms()
    {
        
        $testValue = new \SpApi\Model\orders\v0\AmazonPrograms();
        
        $this->model->setAmazonPrograms($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonPrograms());
    }
}
