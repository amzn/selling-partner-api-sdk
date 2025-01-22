<?php
/**
 * PalletTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\Pallet;

/**
 * PalletTest Class Doc Comment
 *
 * @category    Class
 * @description Pallet information.
 * @package     OpenAPI\Client
 */
class PalletTest extends TestCase
{

    private Pallet $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Pallet();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Pallet"
     */
    public function testPallet()
    {
        $this->assertInstanceOf(Pallet::class, $this->model);
    }

    /**
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Dimensions();
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Weight();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }

    /**
     * Test attribute "is_stacked"
     */
    public function testPropertyIsStacked()
    {
        $testValue = true;
        
        $this->model->setIsStacked($testValue);
        $this->assertEquals($testValue, $this->model->getIsStacked());
    }
}
