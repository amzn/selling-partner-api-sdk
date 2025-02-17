<?php
/**
 * PackingSlipTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\PackingSlip;

/**
 * PackingSlipTest Class Doc Comment
 *
 * @category    Class
 * @description Packing slip information.
 * @package     SpApi
 */
class PackingSlipTest extends TestCase
{

    private PackingSlip $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackingSlip();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackingSlip"
     */
    public function testPackingSlip()
    {
        $this->assertInstanceOf(PackingSlip::class, $this->model);
    }

    /**
     * Test attribute "purchase_order_number"
     */
    public function testPropertyPurchaseOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setPurchaseOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderNumber());
    }

    /**
     * Test attribute "content"
     */
    public function testPropertyContent()
    {
        $testValue = 'test';
        
        $this->model->setContent($testValue);
        $this->assertEquals($testValue, $this->model->getContent());
    }

    /**
     * Test attribute "content_type"
     */
    public function testPropertyContentType()
    {
        $enumInstance = new PackingSlip();
        $allowedValues = $enumInstance->getContentTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setContentType($testValue);
        $this->assertEquals($testValue, $this->model->getContentType());
    }
}
