<?php
/**
 * ConfirmShipmentRequestTest
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
use SpApi\Model\orders\v0\ConfirmShipmentRequest;

/**
 * ConfirmShipmentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for an shipment confirmation.
 * @package     SpApi
 */
class ConfirmShipmentRequestTest extends TestCase
{

    private ConfirmShipmentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConfirmShipmentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConfirmShipmentRequest"
     */
    public function testConfirmShipmentRequest()
    {
        $this->assertInstanceOf(ConfirmShipmentRequest::class, $this->model);
    }

    /**
     * Test attribute "package_detail"
     */
    public function testPropertyPackageDetail()
    {
        
        $testValue = new \SpApi\Model\orders\v0\PackageDetail();
        
        $this->model->setPackageDetail($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDetail());
    }

    /**
     * Test attribute "cod_collection_method"
     */
    public function testPropertyCodCollectionMethod()
    {
        $enumInstance = new ConfirmShipmentRequest();
        $allowedValues = $enumInstance->getCodCollectionMethodAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setCodCollectionMethod($testValue);
        $this->assertEquals($testValue, $this->model->getCodCollectionMethod());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }
}
