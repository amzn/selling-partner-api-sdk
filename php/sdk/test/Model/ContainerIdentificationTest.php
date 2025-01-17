<?php
/**
 * ContainerIdentificationTest
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
use OpenAPI\Client\Model\vendor\shipments\ContainerIdentification;

/**
 * ContainerIdentificationTest Class Doc Comment
 *
 * @category    Class
 * @description A list of carton identifiers.
 * @package     OpenAPI\Client
 */
class ContainerIdentificationTest extends TestCase
{

    private ContainerIdentification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContainerIdentification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContainerIdentification"
     */
    public function testContainerIdentification()
    {
        $this->assertInstanceOf(ContainerIdentification::class, $this->model);
    }

    /**
     * Test attribute "container_identification_type"
     */
    public function testPropertyContainerIdentificationType()
    {
        $enumInstance = new ContainerIdentification();
        $allowedValues = $enumInstance->getContainerIdentificationTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setContainerIdentificationType($testValue);
        $this->assertEquals($testValue, $this->model->getContainerIdentificationType());
    }

    /**
     * Test attribute "container_identification_number"
     */
    public function testPropertyContainerIdentificationNumber()
    {
        $testValue = 'test';
        
        $this->model->setContainerIdentificationNumber($testValue);
        $this->assertEquals($testValue, $this->model->getContainerIdentificationNumber());
    }
}
