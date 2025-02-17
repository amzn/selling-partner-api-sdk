<?php
/**
 * TechnicianTest
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
use SpApi\Model\services\v1\Technician;

/**
 * TechnicianTest Class Doc Comment
 *
 * @category    Class
 * @description A technician who is assigned to perform the service job in part or in full.
 * @package     SpApi
 */
class TechnicianTest extends TestCase
{

    private Technician $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Technician();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Technician"
     */
    public function testTechnician()
    {
        $this->assertInstanceOf(Technician::class, $this->model);
    }

    /**
     * Test attribute "technician_id"
     */
    public function testPropertyTechnicianId()
    {
        $testValue = 'test';
        
        $this->model->setTechnicianId($testValue);
        $this->assertEquals($testValue, $this->model->getTechnicianId());
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }
}
