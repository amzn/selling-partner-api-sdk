<?php
/**
 * PalletInputTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentInbound\PalletInput;

/**
 * PalletInputTest Class Doc Comment
 *
 * @category    Class
 * @description Contains input information about a pallet to be used in the inbound plan.
 * @package     OpenAPI\Client
 */
class PalletInputTest extends TestCase
{

    private PalletInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PalletInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PalletInput"
     */
    public function testPalletInput()
    {
        $this->assertInstanceOf(PalletInput::class, $this->model);
    }

    /**
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Dimensions();
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "stackability"
     */
    public function testPropertyStackability()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillmentInbound\Stackability();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStackability($testValue);
        $this->assertEquals($testValue, $this->model->getStackability());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Weight();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }
}
