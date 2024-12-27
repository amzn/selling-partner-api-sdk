<?php
/**
 * DimensionTest
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
use OpenAPI\Client\Model\catalogitems\Dimension;

/**
 * DimensionTest Class Doc Comment
 *
 * @category    Class
 * @description Individual dimension value of an Amazon catalog item or item package.
 * @package     OpenAPI\Client
 */
class DimensionTest extends TestCase
{

    private Dimension $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Dimension();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Dimension"
     */
    public function testDimension()
    {
        $this->assertInstanceOf(Dimension::class, $this->model);
    }

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $testValue = 'test';
        
        $this->model->setUnit($testValue);
        $this->assertEquals($testValue, $this->model->getUnit());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 1;
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
