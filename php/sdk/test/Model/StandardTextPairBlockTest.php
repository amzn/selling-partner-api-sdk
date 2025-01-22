<?php
/**
 * StandardTextPairBlockTest
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
use OpenAPI\Client\Model\aplusContent\StandardTextPairBlock;

/**
 * StandardTextPairBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content standard label and description block, comprised of a pair of text components.
 * @package     OpenAPI\Client
 */
class StandardTextPairBlockTest extends TestCase
{

    private StandardTextPairBlock $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardTextPairBlock();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardTextPairBlock"
     */
    public function testStandardTextPairBlock()
    {
        $this->assertInstanceOf(StandardTextPairBlock::class, $this->model);
    }

    /**
     * Test attribute "label"
     */
    public function testPropertyLabel()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setLabel($testValue);
        $this->assertEquals($testValue, $this->model->getLabel());
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }
}
