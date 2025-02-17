<?php
/**
 * CODSettingsTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\CODSettings;

/**
 * CODSettingsTest Class Doc Comment
 *
 * @category    Class
 * @description The COD (Cash On Delivery) charges that you associate with a COD fulfillment order.
 * @package     SpApi
 */
class CODSettingsTest extends TestCase
{

    private CODSettings $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CODSettings();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CODSettings"
     */
    public function testCODSettings()
    {
        $this->assertInstanceOf(CODSettings::class, $this->model);
    }

    /**
     * Test attribute "is_cod_required"
     */
    public function testPropertyIsCodRequired()
    {
        $testValue = true;
        
        $this->model->setIsCodRequired($testValue);
        $this->assertEquals($testValue, $this->model->getIsCodRequired());
    }

    /**
     * Test attribute "cod_charge"
     */
    public function testPropertyCodCharge()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setCodCharge($testValue);
        $this->assertEquals($testValue, $this->model->getCodCharge());
    }

    /**
     * Test attribute "cod_charge_tax"
     */
    public function testPropertyCodChargeTax()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setCodChargeTax($testValue);
        $this->assertEquals($testValue, $this->model->getCodChargeTax());
    }

    /**
     * Test attribute "shipping_charge"
     */
    public function testPropertyShippingCharge()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setShippingCharge($testValue);
        $this->assertEquals($testValue, $this->model->getShippingCharge());
    }

    /**
     * Test attribute "shipping_charge_tax"
     */
    public function testPropertyShippingChargeTax()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setShippingChargeTax($testValue);
        $this->assertEquals($testValue, $this->model->getShippingChargeTax());
    }
}
