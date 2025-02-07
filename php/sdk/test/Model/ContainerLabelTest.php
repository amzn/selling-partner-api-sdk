<?php
/**
 * ContainerLabelTest
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
use OpenAPI\Client\Model\vendor\df\shipping\v2021_12_28\ContainerLabel;

/**
 * ContainerLabelTest Class Doc Comment
 *
 * @category    Class
 * @description The details of the container label.
 * @package     OpenAPI\Client
 */
class ContainerLabelTest extends TestCase
{

    private ContainerLabel $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContainerLabel();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContainerLabel"
     */
    public function testContainerLabel()
    {
        $this->assertInstanceOf(ContainerLabel::class, $this->model);
    }

    /**
     * Test attribute "container_tracking_number"
     */
    public function testPropertyContainerTrackingNumber()
    {
        $testValue = 'test';
        
        $this->model->setContainerTrackingNumber($testValue);
        $this->assertEquals($testValue, $this->model->getContainerTrackingNumber());
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
     * Test attribute "format"
     */
    public function testPropertyFormat()
    {
        $enumInstance = new \OpenAPI\Client\Model\vendor\df\shipping\v2021_12_28\ContainerLabelFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFormat($testValue);
        $this->assertEquals($testValue, $this->model->getFormat());
    }
}
