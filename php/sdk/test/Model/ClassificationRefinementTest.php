<?php
/**
 * ClassificationRefinementTest
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
use SpApi\Model\catalogItems\v2022_04_01\ClassificationRefinement;

/**
 * ClassificationRefinementTest Class Doc Comment
 *
 * @category    Class
 * @description Description of a classification that can be used to get more fine-grained search results.
 * @package     SpApi
 */
class ClassificationRefinementTest extends TestCase
{

    private ClassificationRefinement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ClassificationRefinement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ClassificationRefinement"
     */
    public function testClassificationRefinement()
    {
        $this->assertInstanceOf(ClassificationRefinement::class, $this->model);
    }

    /**
     * Test attribute "number_of_results"
     */
    public function testPropertyNumberOfResults()
    {
        $testValue = 123;
        
        $this->model->setNumberOfResults($testValue);
        $this->assertEquals($testValue, $this->model->getNumberOfResults());
    }

    /**
     * Test attribute "display_name"
     */
    public function testPropertyDisplayName()
    {
        $testValue = 'test';
        
        $this->model->setDisplayName($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayName());
    }

    /**
     * Test attribute "classification_id"
     */
    public function testPropertyClassificationId()
    {
        $testValue = 'test';
        
        $this->model->setClassificationId($testValue);
        $this->assertEquals($testValue, $this->model->getClassificationId());
    }
}
