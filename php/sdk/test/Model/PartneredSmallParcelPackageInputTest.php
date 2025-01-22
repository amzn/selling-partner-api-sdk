<?php
/**
 * PartneredSmallParcelPackageInputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredSmallParcelPackageInput;

/**
 * PartneredSmallParcelPackageInputTest Class Doc Comment
 *
 * @category    Class
 * @description Dimension and weight information for the package.
 * @package     OpenAPI\Client
 */
class PartneredSmallParcelPackageInputTest extends TestCase
{

    private PartneredSmallParcelPackageInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PartneredSmallParcelPackageInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PartneredSmallParcelPackageInput"
     */
    public function testPartneredSmallParcelPackageInput()
    {
        $this->assertInstanceOf(PartneredSmallParcelPackageInput::class, $this->model);
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
}
