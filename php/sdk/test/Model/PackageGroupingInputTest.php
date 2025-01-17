<?php
/**
 * PackageGroupingInputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\PackageGroupingInput;

/**
 * PackageGroupingInputTest Class Doc Comment
 *
 * @category    Class
 * @description Packing information for the inbound plan.
 * @package     OpenAPI\Client
 */
class PackageGroupingInputTest extends TestCase
{

    private PackageGroupingInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageGroupingInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageGroupingInput"
     */
    public function testPackageGroupingInput()
    {
        $this->assertInstanceOf(PackageGroupingInput::class, $this->model);
    }

    /**
     * Test attribute "boxes"
     */
    public function testPropertyBoxes()
    {
        $testValue = [];
        
        $this->model->setBoxes($testValue);
        $this->assertEquals($testValue, $this->model->getBoxes());
    }

    /**
     * Test attribute "packing_group_id"
     */
    public function testPropertyPackingGroupId()
    {
        $testValue = 'test';
        
        $this->model->setPackingGroupId($testValue);
        $this->assertEquals($testValue, $this->model->getPackingGroupId());
    }

    /**
     * Test attribute "shipment_id"
     */
    public function testPropertyShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentId());
    }
}
