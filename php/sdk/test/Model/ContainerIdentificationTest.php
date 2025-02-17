<?php
/**
 * ContainerIdentificationTest
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
use SpApi\Model\vendor\shipments\v1\ContainerIdentification;

/**
 * ContainerIdentificationTest Class Doc Comment
 *
 * @category    Class
 * @description A list of carton identifiers.
 * @package     SpApi
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
