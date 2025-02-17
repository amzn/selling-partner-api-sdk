<?php
/**
 * BoxRequirementsTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\BoxRequirements;

/**
 * BoxRequirementsTest Class Doc Comment
 *
 * @category    Class
 * @description The requirements for a box in the packing option.
 * @package     SpApi
 */
class BoxRequirementsTest extends TestCase
{

    private BoxRequirements $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BoxRequirements();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BoxRequirements"
     */
    public function testBoxRequirements()
    {
        $this->assertInstanceOf(BoxRequirements::class, $this->model);
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\WeightRange();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }
}
