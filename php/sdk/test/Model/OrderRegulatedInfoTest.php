<?php
/**
 * OrderRegulatedInfoTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\orders\OrderRegulatedInfo;

/**
 * OrderRegulatedInfoTest Class Doc Comment
 *
 * @category    Class
 * @description The order&#39;s regulated information along with its verification status.
 * @package     OpenAPI\Client
 */
class OrderRegulatedInfoTest extends TestCase
{

    private OrderRegulatedInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderRegulatedInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderRegulatedInfo"
     */
    public function testOrderRegulatedInfo()
    {
        $this->assertInstanceOf(OrderRegulatedInfo::class, $this->model);
    }

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }

    /**
     * Test attribute "regulated_information"
     */
    public function testPropertyRegulatedInformation()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\RegulatedInformation();
        
        $this->model->setRegulatedInformation($testValue);
        $this->assertEquals($testValue, $this->model->getRegulatedInformation());
    }

    /**
     * Test attribute "requires_dosage_label"
     */
    public function testPropertyRequiresDosageLabel()
    {
        $testValue = true;
        
        $this->model->setRequiresDosageLabel($testValue);
        $this->assertEquals($testValue, $this->model->getRequiresDosageLabel());
    }

    /**
     * Test attribute "regulated_order_verification_status"
     */
    public function testPropertyRegulatedOrderVerificationStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\RegulatedOrderVerificationStatus();
        
        $this->model->setRegulatedOrderVerificationStatus($testValue);
        $this->assertEquals($testValue, $this->model->getRegulatedOrderVerificationStatus());
    }
}
